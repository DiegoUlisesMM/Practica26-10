import React from 'react';
import "../styles/CompletedTaskCounter.css"

function CompletedTaskCounter({ count }) {
  return (
    <div className="Completadas" style={{height:'auto'}}>
      <p>Tareas completadas: {count}</p>
    </div>
  );
}

export default CompletedTaskCounter;
