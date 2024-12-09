import React from 'react'
import { useNavigate } from "react-router-dom";
import organizingAnimate from "../imgs/organizingAnimate.png"

import "./css/Login.css"
export default function Signup() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  return (
    <main>
    <div class="main-login">
       
        <div class="left-login">
          
            <div class="login-container">
                <h1>Registre-se para continuar</h1>
                <br/>

                <div class="text-container ">
                    <label for="conf_senha"> Nome de Usuario </label>
                    <input type="text" id="conf_senha" name="senha" placeholder="Digite seu Nome"/>
                </div>

                <div class="text-container ">
                    <label for="user"> Digite seu E-mail</label>
                    <input type="email" id="user" name="user" placeholder="Insira seu email"/>
                </div>

                <div class="text-container ">
                    <label for="senha"> Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Insira sua senha"/>
                </div>

                <br/>

                <button class="login" onClick={goLogin}>Cadastrar</button>
            </div>
        </div>

      
        <div class="right-login">
            <h1>Bem-vindo  <br/> Embarque em uma  nova  jornada </h1>
            <img src={organizingAnimate}  class="Img-login" alt="animação do kanban"/>
        </div>
    </div>
</main>
  )
}
