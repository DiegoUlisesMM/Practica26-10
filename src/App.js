import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ titulo: '', contenido: '' });

  useEffect(() => {
    // Al cargar la aplicación, listar las notas existentes
    listarNotas();
  }, []);

  const listarNotas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/notes') // Reemplaza con tu ruta de API
      setNotes(response.data);
    } catch (error) {
      console.error('Error al listar las notas:', error);
    }
  };

  const crearNota = async () => {
    try {
      await axios.post('/api/notes', newNote); // Reemplaza con tu ruta de API
      listarNotas(); // Después de crear una nota, actualiza la lista
      setNewNote({ titulo: '', contenido: '' }); // Limpia el formulario
    } catch (error) {
      console.error('Error al crear una nota:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Notas</h1>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={newNote.titulo}
          onChange={(e) => setNewNote({ ...newNote, titulo: e.target.value })}
        />
        <textarea
          placeholder="Contenido"
          value={newNote.contenido}
          onChange={(e) => setNewNote({ ...newNote, contenido: e.target.value })}
        />
        <button onClick={crearNota}>Crear Nota</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.titulo}</h3>
            <p>{note.contenido}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
