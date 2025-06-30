import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const styles = {
  container: {
    background: "#1f2937", // gris oscuro
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    padding: "32px",
    marginTop: "32px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#f3f4f6",
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px"
  },
  th: {
    background: "#111827",
    color: "#10b981", // verde esmeralda
    padding: "12px",
    fontWeight: "bold",
    borderBottom: "2px solid #374151"
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #374151",
    textAlign: "center",
    color: "#e5e7eb"
  },
  button: {
    margin: "0 4px",
    padding: "8px 10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px"
  },
  editBtn: {
    background: "#f59e0b", // ámbar
    color: "#1f2937"
  },
  deleteBtn: {
    background: "#ef4444", // rojo
    color: "#fff"
  }
};

const CourseList = ({ courses, onEdit, onDelete }) => (
  <div style={styles.container}>
    <h2 style={{ marginBottom: "12px" }}>Lista de Cursos</h2>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Asignatura</th>
          <th style={styles.th}>Descripción</th>
          <th style={styles.th}>Número de Temas</th>
          <th style={styles.th}>Fecha de Publicación</th>
          <th style={styles.th}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td style={styles.td}>{course.title}</td>
            <td style={styles.td}>{course.description}</td>
            <td style={styles.td}>{course.numberOfTopics}</td>
            <td style={styles.td}>
              {course.publishedAt ? new Date(course.publishedAt).toLocaleDateString() : ""}
            </td>
            <td style={styles.td}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  style={{ ...styles.button, ...styles.editBtn }}
                  onClick={() => onEdit(course)}
                  title = "Editar"
                >
                  <FaEdit />
                </button>
                <button
                  style={{ ...styles.button, ...styles.deleteBtn }}
                  onClick={() => onDelete(course._id)}
                  title = "Eliminar"
                >
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CourseList;