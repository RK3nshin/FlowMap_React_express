import React from 'react'
import './css/Planos.css'

export default function Planos() {
  const planos = [
    {
      titulo: 'Plano Básico Pessoal',
      preco: 'R$ 30/mês',
      beneficios: [
        'Máximo de 5 quadros',
        'Sem automação de tarefas',
        'Sem notificações',
        'Sem IA de suporte',
      ],
    },
    {
      titulo: 'Plano Ultimate Pessoal',
      preco: 'R$ 100/mês',
      beneficios: [
        'Quadros ilimitados',
        'Todo recurso do Básico',
        'Automação de tarefas',
        'Notificações',
        'IA de suporte',
      ],
    },
    {
      titulo: 'Plano Básico Empresarial',
      preco: 'R$ 1000/mês',
      beneficios: [
        'Acesso para até 1000 contas',
        'Máximo de 5 quadros',
        'Sem automação de tarefas',
        'Sem notificações',
        'Sem IA de suporte',
      ],
    },
    {
      titulo: 'Plano Ultimate Empresarial',
      preco: 'R$ 2000/mês',
      beneficios: [
        'Acesso para até 1000 contas',
        'Quadros ilimitados',
        'Todo recurso do Básico',
        'Automação de tarefas',
        'Notificações',
        'IA de suporte',
      ],
    },
  ];

  return (
    <main>
      <section>
        <div id="content-text">
          <h1 id='planos-title'>Escolha o Plano Ideal para Você</h1>
          <p className='planos-description'>Encontre o plano que melhor se adapta às suas necessidades, com benefícios exclusivos para uso pessoal ou empresarial.</p>
        </div>

        <div id="content-cards">
          {planos.map((plano, index) => (
            <div className="card" key={index}>
              <h2>{plano.titulo}</h2>
              <p className="price">{plano.preco}</p>
              <ul>
                {plano.beneficios.map((beneficio, i) => (
                  <li key={i}>{beneficio}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
