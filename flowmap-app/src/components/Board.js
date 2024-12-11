import React, { useState, useEffect } from 'react';
import Column from './Column';
import axios from 'axios';
import './css/Board.css';

export default function Board() {


  const [tasks, setTasks] = useState({
    Fazer: [],
    Progresso: [],
    Finalizado: [],
  });

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
    date: '',
    column: 'Fazer',
  });

  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      axios.get(`https://flow-map-react-express-q4eh.vercel.app/tasks?userId=${userId}`)
        .then((response) => {
          const tasksData = response.data;
          const newTasks = {
            Fazer: tasksData.filter((task) => task.column_name === 'Fazer'),
            Progresso: tasksData.filter((task) => task.column_name === 'Progresso'),
            Finalizado: tasksData.filter((task) => task.column_name === 'Finalizado'),
          };
          setTasks(newTasks);
        })
        .catch((error) => {
          setError('Erro ao carregar as tarefas');
          console.error('Erro ao carregar as tarefas:', error);
        });
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleTaskSubmit = () => {
    const { title, description, priority, date, column } = newTask;
    
    if (!title || !description || !date) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    console.log(date)
    console.log(priority)
    axios.post('https://flow-map-react-express-q4eh.vercel.app/tasks', {
      title,
      description,
      priority,
      date,
      column_name: column,
      userId,
    })
    .then((response) => {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [column]: [...prevTasks[column], response.data],
      }));
      setNewTask({ title: '', description: '', priority: 'Low', date: '', column: 'Fazer' });
      toggleTaskForm();
      setError(null); // Clear error on successful submission
    })
    .catch((error) => {
      setError('Erro ao cadastrar a tarefa');
      console.error('Erro ao cadastrar a tarefa:', error);
    });
  };

  const toggleTaskForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="board">
      <h2 className="board-title">FlowMap</h2>

      <button className="btn-new-task" onClick={toggleTaskForm}>
        Nova Tarefa
      </button>
{/* Formulário de criação de tarefa */}
      {formVisible && (
        <div className="task-form">
          <div className="box">
            <div className="head">
              <span id="task-config-title">Nova Tarefa</span>
              <button onClick={toggleTaskForm}>Fechar</button>
            </div>
            <div className="from">
              {error && <div className="error">{error}</div>}
              <div className="config">
                <label htmlFor="title">Nome</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="config">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="config">
                <label htmlFor="priority">Prioridade</label>
                <select
                  name="priority"
                  id="priority"
                  value={newTask.priority}
                  onChange={handleInputChange}
                >
                  <option value="Low">Baixa</option>
                  <option value="Medium">Média</option>
                  <option value="High">Alta</option>
                </select>
              </div>
              <div className="config">
                <label htmlFor="date">Data Limite</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newTask.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="config">
                <label htmlFor="column">Escolha a Coluna</label>
                <select
                  name="column"
                  id="column"
                  value={newTask.column}
                  onChange={handleInputChange}
                >
                  <option value="Fazer">Fazer</option>
                  <option value="Progresso">Progresso</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </div>

              <button className="btn-submit" onClick={handleTaskSubmit}>Cadastrar</button>
            </div>
          </div>
        </div>
      )}
      <div className="columns-container">
        <Column title="Fazer" tasks={tasks.Fazer} />
        <Column title="Progresso" tasks={tasks.Progresso} />
        <Column title="Finalizado" tasks={tasks.Finalizado} />
      </div>

      
    </div>
  );
}
