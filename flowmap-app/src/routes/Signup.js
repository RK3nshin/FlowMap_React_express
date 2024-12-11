import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import organizingAnimate from "../imgs/organizingAnimate.png";
import "./css/Login.css";

export default function Signup() {
    const navigate = useNavigate();

    // Navegar para a página de login
    const goLogin = () => {
        navigate("/login");
    };

   
    const [form, setForm] = useState({ nome: '', email: '', password: '' });

    // Manipular mudanças no formulário
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Submissão do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://flow-map-react-express-q4eh.vercel.app/signup', form);
            alert('Cadastro realizado com sucesso!');
            console.log(response.data);
            goLogin(); 
        } catch (error) {
            alert(error.response?.data?.error || 'Erro ao realizar cadastro.');
        }
    };

    return (
        <main>
            <div  className="main-login">
                <form onSubmit={handleSubmit} className="left-login">
                    <div className="login-container">
                        <h1>Registre-se para continuar</h1>
                        <br />
                        <div className="text-container">
                            <label htmlFor="nome">Nome de Usuário</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu Nome"
                            />
                        </div>

                        <div className="text-container">
                            <label htmlFor="email">Digite seu E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Insira seu email"
                            />
                        </div>

                        <div className="text-container">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                placeholder="Insira sua senha"
                            />
                        </div>
                        <br />

                        <button type="submit" className="login">
                            Cadastrar
                        </button>
                    </div>
                </form>

                <div className="right-login">
                    <h1>Bem-vindo<br />Embarque em uma nova jornada</h1>
                    <img src={organizingAnimate} className="Img-login" alt="animação do kanban" />
                </div>
            </div>
        </main>
    );
}
