import React from 'react';
import "../styles/PendingTaskCounter.css"

function PendingTaskCounter({ count }) {
    return (
        <div className="Pedientes" style={{height:'auto'}}>
            <p>Tareas pendientes: {count}</p>
        </div>
    );
}

export default PendingTaskCounter;
