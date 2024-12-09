import React from 'react'
import './css/Planos.css'

export default function Planos() {
  return (
    <main>
      <section id="plans">
        <div className="card">
          <h2>Plano Básico Pessoal</h2>
          <p className="price">R$ 30/mês</p>
          <ul>
            <li>Máximo de 5 quadros</li>
            <li>Sem automação de tarefas</li>
            <li>Sem notificações</li>
            <li>Sem IA de suporte</li>
          </ul>
        </div>
        <div className="card">
          <h2>Plano Ultimate Pessoal</h2>
          <p className="price">R$ 100/mês</p>
          <ul>
            <li>Quadros ilimitados</li>
            <li>Todo recurso do Básico</li>
            <li>Automação de tarefas</li>
            <li>Notificações</li>
            <li>IA de suporte</li>
          </ul>
        </div>
        <div className="card">
          <h2>Plano Básico Empresarial</h2>
          <p className="price">R$ 1000/mês</p>
          <ul>
            <li>Acesso para até 1000 contas</li>
            <li>Máximo de 5 quadros</li>
            <li>Sem automação de tarefas</li>
            <li>Sem notificações</li>
            <li>Sem IA de suporte</li>
          </ul>
        </div>
        <div className="card">
          <h2>Plano Ultimate Empresarial</h2>
          <p className="price">R$ 2000/mês</p>
          <ul>
            <li>Acesso para até 1000 contas</li>
            <li>Quadros ilimitados</li>
            <li>Todo recurso do Básico</li>
            <li>Automação de tarefas</li>
            <li>Notificações</li>
            <li>IA de suporte</li>
          </ul>
        </div>
      </section>
    </main>

  )
}
