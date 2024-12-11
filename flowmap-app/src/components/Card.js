import React from 'react';
import './css/Card.css'; 
const Card = ({ task }) => {
  return (
    <div className="card">
      <div>
        <small>#{task.id}</small>
      </div>
      <div>
        <strong>{task.title}</strong>
      </div>
      <div>
        <div><b>Prioridade:</b> {task.priority}</div>
      </div>
    </div>
  );
};

export default Card;
