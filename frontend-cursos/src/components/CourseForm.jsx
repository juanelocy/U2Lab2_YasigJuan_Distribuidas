import React, { useState, useEffect } from "react";

const styles = {
  formContainer: {
    background: "#1f2937",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    padding: "40px",
    marginTop: "32px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#f9fafb"
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: "#9ca3af",
    fontSize: "14px"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #374151",
    borderRadius: "8px",
    backgroundColor: "#111827",
    color: "#f9fafb",
    fontSize: "16px",
    outline: "none"
  },
  button: {
    margin: "0 8px 8px 0",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#10b981",
    color: "#ffffff",
    fontSize: "16px"
  },
  cancelBtn: {
    background: "#ef4444"
  }
};


const initialState = {
  title: "",
  description: "",
  numberOfTopics: "",
  publishedAt: ""
};

const CourseForm = ({ onSubmit, selectedCourse, onCancel }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedCourse) {
      setForm({
        ...selectedCourse,
        numberOfTopics: selectedCourse.numberOfTopics || "",
        publishedAt: selectedCourse.publishedAt
          ? new Date(selectedCourse.publishedAt).toISOString().split("T")[0]
          : ""
      });
    } else {
      setForm(initialState);
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      numberOfTopics: form.numberOfTopics ? Number(form.numberOfTopics) : undefined,
      publishedAt: form.publishedAt ? new Date(form.publishedAt) : undefined
    };
    onSubmit(data);
    setForm(initialState);
  };

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <h2 style={{ color: "#1976d2" }}>{selectedCourse ? "Editar Curso" : "Nuevo Curso"}</h2>
      <label style={styles.label}>Título</label>
      <input
        style={styles.input}
        type="text"
        name="title"
        placeholder="Nombre de la Asignatura"
        value={form.title}
        onChange={handleChange}
        required
      />
      <label style={styles.label}>Descripción</label>
      <input
        style={styles.input}
        type="text"
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />
      <label style={styles.label}>Número de Temas</label>
      <input
        style={styles.input}
        type="number"
        name="numberOfTopics"
        placeholder="Número de Temas"
        value={form.numberOfTopics}
        onChange={handleChange}
        min="0"
      />
      <label style={styles.label}>Fecha de Publicación</label>
      <input
        style={styles.input}
        type="date"
        name="publishedAt"
        placeholder="Fecha de Publicación"
        value={form.publishedAt}
        onChange={handleChange}
      />
      <button style={styles.button} type="submit">
        {selectedCourse ? "Actualizar" : "Crear"}
      </button>
      {selectedCourse && (
        <button
          style={{ ...styles.button, ...styles.cancelBtn }}
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default CourseForm;