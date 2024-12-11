import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import KanbanAnimacao from '../imgs/kanbananimate.png';

export default function Login() {
  const navigate = useNavigate();

  // Navegar para o Kanban após login
  const goKanban = () => {
    navigate("/kanban");
  };

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submeter formulário
  const handleSubmit = async (e) => {
    console.log("aqui")
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9082/login', form);
      alert('Login realizado com sucesso!');
      console.log(response.data);
  
      // Armazenar o ID do usuário no localStorage
      localStorage.setItem('userId', response.data.user.id);
      console.log(response.data.user.id)
  
      goKanban(); // Navegar para o Kanban após sucesso
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Erro ao realizar login.';
      alert(errorMessage);
    }
  };
  return (
    <main>
      <div className="main-login">
        <form className="left-login" onSubmit={handleSubmit}>
          <div className="login-container">
            <h1>Entre para continuar</h1>

            <div className="text-container">
              <label htmlFor="user-email">E-mail</label>
              <input
                type="email"
                id="user-email"
                name="email"
                placeholder="Insira seu email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-container">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Insira sua senha"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login">
              Entrar
            </button>
          </div>
        </form>

        <div className="right-login">
          <h1>
            Bem-vindo de volta <br /> Entre para acessar suas tarefas
          </h1>
          <img
            src={KanbanAnimacao}
            className="Img-login"
            alt="animação do kanban"
          />
        </div>
      </div>
    </main>
  );
}
