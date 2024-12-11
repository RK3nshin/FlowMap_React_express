import React from 'react'
import whatKanban from '../imgs/whatKanban.jpg';
import './css/Servicos.css'

export default function Servicos() {
  const infoBoxes = [
    {
      title: "Quadros Kanban",
      description:
        "Visualize suas tarefas organizadas em quadros claros e intuitivos. Veja o progresso do início ao fim e mantenha sua equipe sincronizada.",
    },
    {
      title: "Etapas Personalizáveis",
      description:
        "Divida suas tarefas em listas como A Fazer, Em Progresso e Concluído – ou adapte o fluxo para atender às necessidades exclusivas do seu projeto.",
    },
    {
      title: "Tarefas e Cartões",
      description:
        "Crie cartões para tarefas e ideias. Organize todas as informações essenciais e atualize o status arrastando os cartões entre as listas.",
    },
  ];
  
  const cards = [
    {
      title: "Organização Visual",
      description: "Planeje e organize projetos visualmente com a facilidade de um sistema Kanban. Ideal para equipes ágeis.",
      color: "#FF735D",
      icon: "📂",
    },
    {
      title: "Brainstorming Criativo",
      description: "Centralize ideias da equipe em um só lugar e facilite a transformação de conceitos em ações.",
      color: "#4A90E2",
      icon: "💡",
    },
    {
      title: "Integração Simplificada",
      description: "Adapte-se rapidamente a novos fluxos de trabalho e equipes com ferramentas que tornam a colaboração fluida.",
      color: "#34C759",
      icon: "🍃",
    },
    {
      title: "Gerenciamento de Tarefas",
      description: "Transforme tarefas complexas em ações simples e coordenadas para alcançar os objetivos do projeto com eficiência.",
      color: "#FFC042",
      icon: "📋",
    },
  ];
  
  return (
    <main>
        <div id="content">
          <div id="content-text">
            <h1 id="content-title">Maximize sua produtividade</h1>
            <p className="content-description"> Simples, flexível e poderoso. 
            Tudo o que você precisa são quadros, listas e cartões para 
            visualizar claramente quem está fazendo o quê e o que precisa
            ser concluído. Descubra como começar no nosso guia prático.
            </p>
            
            <div className="info-boxes">
              {infoBoxes.map((box, index) => (
                <div key={index} className="info-box">
                  <h3>{box.title}</h3>
                  <p>{box.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="image-container">
            <img src={whatKanban} alt="O que é um quadro kanban" />
          </div>
        </div>
      
      <section className="servicos-section">
        <h1 className="servicos-title">Fluxos de trabalho para qualquer projeto, grande ou pequeno</h1>
        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="card" style={{ borderTop: `8px solid ${card.color}` }} key={index}>
              <span className="card-icon">{card.icon}</span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

