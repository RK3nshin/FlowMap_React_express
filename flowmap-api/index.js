const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const bodyparser = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("./config");

const app = express();
app.use(express.json());
app.use(bodyparser.json());

// Configuração de CORS
const corsOptions = {
    origin: 'https://flow-map-react-express-4owj.vercel.app', // Substitua pela origem correta
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept'
};
app.use(cors(corsOptions));

// Banco de dados
let conString = config.urlConnection;
let client = new Client(conString);

client.connect((err) => {
    if (err) {
        console.error("Não foi possível conectar ao banco.", err);
    } else {
        console.log("Conectado ao banco com sucesso.");
    }
});

// Rota principal
app.get("/", (req, res) => {
    res.send("Ok – Servidor disponível.");
});

// Rota de registro (signup)
app.post("/signup", async (req, res) => {
    const { nome, email, password } = req.body;

    try {
        const userCheck = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: "Email já cadastrado." });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await client.query(
            "INSERT INTO users (nome, email, password_hash) VALUES ($1, $2, $3) RETURNING id, nome, email",
            [nome, email, passwordHash]
        );

        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Erro no servidor." });
    }
});

// Rota de login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const userResult = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = userResult.rows[0];

        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado." });
        }

        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(401).json({ error: "Senha incorreta." });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ 
            token, 
            user: { id: user.id, nome: user.nome, email: user.email } 
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Erro no servidor." });
    }
});

// rotas task 

app.get("/tasks", async (req, res) => {
  const { userId } = req.query; // Recebe o userId da query string

  try {
    const result = await client.query("SELECT * FROM task WHERE id_user = $1", [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Nenhuma tarefa encontrada para este usuário." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao buscar as tarefas." });
  }
});


app.post("/tasks", async (req, res) => {
  const { userId, column_name, title, description, priority, deadline } = req.body;

  try {
    const result = await client.query(
      "INSERT INTO task (id_user, column_name, title, description, priority, deadline) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [userId, column_name, title, description, priority, deadline]
    );

    res.status(201).json(result.rows[0]); // Retorna a tarefa criada
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao criar a tarefa." });
  }
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params; // ID da tarefa
  const { column_name, title, description, priority, deadline } = req.body;
  const formattedDate = new Date(date);
  if (isNaN(formattedDate.getTime())) {
    return res.status(400).json({ error: 'Data inválida' });
  }
  try {
    const result = await client.query(
      "UPDATE task SET column_name = $1, title = $2, description = $3, priority = $4, deadline = $5 WHERE id = $6 RETURNING *",
      [column_name, title, description, priority, deadline, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    res.status(200).json(result.rows[0]); // Retorna a tarefa atualizada
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao atualizar a tarefa." });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params; // ID da tarefa

  try {
    const result = await client.query("DELETE FROM task WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    res.status(200).json({ message: "Tarefa excluída com sucesso." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erro ao excluir a tarefa." });
  }
});


// Iniciar servidor
app.listen(config.port, () =>
  console.log("Servidor funcionando na porta " + config.port)
);

module.exports = app;