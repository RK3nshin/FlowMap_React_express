import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imgs/Kamban.svg';
import IconMenu from '../imgs/menu.svg';
import './css/NavBar.css'



export default function NavBar() {
  const [menuActive,setMenuActive] = useState(false);
  
  const ativar_menu_responsivo = () => {
    setMenuActive(!menuActive);
  }

  const fechar_menu = () => {
    setMenuActive(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuActive && !event.target.closest('.navbar')) {
        setMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuActive]);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={fechar_menu}>
        <img src={Logo} alt="Logo" className="logo" /> FlowMap
      </Link>
      <ul className={`item-bar ${menuActive ? 'active' : ''}`}>
        <li>
          <Link to="/ferramentas" onClick={fechar_menu}>Serviços</Link>
        </li>
        <li>
          <Link to="/assinaturas" onClick={fechar_menu}>Assinaturas</Link>
        </li>
        <li>
          <Link to="/SobreNos" onClick={fechar_menu}>Sobre Nós</Link>
        </li>
        <li className='logSign-visibility'>
          <Link to="/login" onClick={fechar_menu}>Entrar</Link>
        </li>
        <li className='logSign-visibility'>
          <Link to="/signup" onClick={fechar_menu}>Criar Conta</Link>
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
