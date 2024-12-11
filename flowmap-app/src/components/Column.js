import React from 'react';
import Card from './Card';
import './css/Column.css'; 

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <h3 className="column-title">{title}</h3>
      <div className="tasks-container">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
