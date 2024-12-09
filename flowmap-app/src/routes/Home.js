import React from 'react';

import homeImage from '../imgs/home.jpeg';
import todoPageImage from '../imgs/todoPage.png';
import kanbanImage from '../imgs/metodo-kanban.jpeg';
import automationImage from '../imgs/automatizacao.webp';
import"./css/Home.css";

export default function Home() {
  return (
    <div>
  
      <main>
        <div id="presentation">
          <div id="presentation-container">
            <p id="title-presentation">FlowMap : Simplicidade e Organização</p>
            <p id="description-presentation">
              Planeje, acompanhe e visualize suas tarefas de forma intuitiva e eficiente.
              Mantenha-se focado e produtivo com o FlowMap, onde suas ideias se transformam em ações.
            </p>
          </div>

          <div id="img-home">
            <img src={homeImage} alt="Colaboração entre Pessoas" />
          </div>
        </div>

        <section id="home-main">
          <h1 className="title-main">Organize suas tarefas e coordene processo e equipes de formas automatizada</h1>
          <p className="text-main">
            <strong> Simples, flexível e poderoso.</strong> Com apenas quadros, listas e cartões,
            obtenha uma visualização clara de quem está fazendo o que e o que precisa ser feito. Nossa ferramenta
            oferece uma maneira intuitiva de gerenciar projetos e processos, garantindo que você e sua equipe estejam
            sempre no caminho certo.
          </p>
          <img src={todoPageImage} alt="Tabelas to-do-list do FlowMap" />

          <h1 className="title-main">Saiba tudo o que precisa ser feito hoje e nos próximos dias em uma única tela.</h1>
          <p className="text-main">
            Com a FlowMap, você terá mais dinamismo e produtividade no seu dia a dia de trabalho. Tenha uma
            visão mais clara e objetiva das suas tarefas, contatos, arquivos e cards, facilitando a organização
            e o acompanhamento de todas as atividades.
          </p>
          <img src={kanbanImage} alt="Estrutura do método kanban" />

          <h1 className="title-main">Automatize tarefas e notificações</h1>
          <p className="text-main">
            Automatize suas tarefas e notificações com facilidade. Informe seus clientes automaticamente sobre o
            andamento do seu projeto, dispare e-mails, inicie novos fluxos de trabalho, avise os responsáveis e
            implemente diversas outras automações. Tudo isso é facilmente configurável, tornando a gestão do seu
            projeto mais eficiente e menos manual.
          </p>
          <img src={automationImage} alt="Automatizando tarefas online" />
        </section>
      </main>

    </div>
    
  );
}
