// src/App.jsx
import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/courses'; // cambia si usas otro puerto

function App() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error('Error cargando cursos:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Listado de Cursos</h1>
      {courses.length === 0 ? (
        <p>No hay cursos disponibles.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
