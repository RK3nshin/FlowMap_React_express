import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import KanbanAnimacao from '../imgs/kanbananimate.png';

export default function Login() {
  const navigate = useNavigate();
 
  const goKanban = () => {
    navigate("/kanban");
  };


  return (
    <main>
      <div className="main-login">
        <div className="left-login">
          <div className="login-container">
            <h1>Entre para continuar</h1>

            <div className="text-container">
              <label htmlFor="user">E-mail</label>
              <input
                type="email"
                id="user-email"
                name="user"
                placeholder="Insira seu email"
              />
            </div>

            <div className="text-container">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Insira sua senha"
              />
            </div>

            <button className="login" onClick={goKanban}>
              Entrar
            </button>
          </div>
        </div>

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
