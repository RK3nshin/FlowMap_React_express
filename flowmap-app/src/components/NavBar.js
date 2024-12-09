import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imgs/Kamban.svg';
import IconMenu from '../imgs/menu.svg';
import './css/NavBar.css'



export default function NavBar() {
  const [menuActive,setMenuActive] = useState(false);
  
  const ativar_menu_responsivo = () => {
    console.log(menuActive)
    setMenuActive(!menuActive);
   
  }


  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" /> FlowMap
      </Link>
      <ul className={`item-bar ${menuActive ? 'active' : ''}`}>
        <li>
          <Link to="/ferramentas">Serviços</Link>
        </li>
        <li>
          <Link to="/assinaturas">Assinaturas</Link>
        </li>
        <li>
          <Link to="/SobreNos">Sobre Nós</Link>
        </li>
      </ul>
      <div className="main">
        <Link to="/login" id='btn-login'>Entrar</Link>
        <Link to="/signup" id='btn-signup'>Criar Conta</Link>
       
      </div>
      <div className='menu-responsivo'  onClick={ativar_menu_responsivo}> <img  alt='Menu' src={IconMenu} /> </div>
      
    </header>
  );
}
