import React from 'react'
import './css/SobreNos.css'

export default function SobreNos() {
  return (
    <main>
      
        <section className="about" >
            <h2>Quem Somos</h2>
            <p>
                A FlowMap é uma plataforma inovadora dedicada a ajudar indivíduos e empresas no gerenciar de suas tarefas e
                projetos de forma eficiente. Tendo uma interface intuitiva e com vários recursos avançados, nosso objetivo é
                facilitar a organização e aumentar a produtividade, permitindo um melhor acompanhamento de atividades, prazos 
                e prioridades, otimizando o fluxo de trabalho para garantir resultados mais rápidos e eficazes.
            </p>
        </section>

        
        <section className="mission">
            <h2>Nossa Missão</h2>
            <p>
                Durante nossa vida acadêmica, a organização sempre desempenhou um papel fundamental para garantir o sucesso 
                e a eficiência nas atividades diárias. Nesse sentido, tentamos recriar as funcionalidades de algumas ferramentas 
                de Kanban, com o objetivo de proporcionar uma maneira simples, e eficaz de organizar tarefas. Através desse sistema 
                de gerenciamento, é possível acompanhar o progresso de cada atividade, otimizar o fluxo de trabalho e garantir um 
                maior controle sobre prazos e prioridades.
            </p>
        </section>

      
        <section className="team">
            <h2>Conheça Nossa Equipe</h2>
            <div className="team-member">
                <h3>Guilbert Wilkerson</h3>
                <p>Desenvolvedor</p>
            </div>
            <div className="team-member">
                <h3>Alexandre Vieira </h3>
                <p>Desenvolvedor</p>
            </div>
        </section>

    </main>
  )
}
