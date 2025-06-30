import React, { useState } from "react";
import axios from "axios";
const styles = {
  formContainer: {
    background: "#1f2937", // gris oscuro
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    padding: "40px",
    marginTop: "50px",
    width: "100%",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#10b981", // verde esmeralda
    color: "#ffffff",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  error: {
    color: "#ef4444",
    marginTop: "12px",
    fontSize: "14px",
  },
  success: {
    color: "#22c55e",
    marginTop: "12px",
    fontSize: "14px",
  }
};


const RegisterForm = ({ onRegister }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setError("");
    try {
      await axios.post("http://localhost:8080/auth/register", form);
      setMsg("Usuario registrado correctamente");
      setForm({ username: "", password: "" });
      onRegister && onRegister();
    } catch (err) {
      setError(err.response?.data?.error || "Error");
    }
  };

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <h2 style={{ color: "#1976d2" }}>Registro</h2>
      <label style={styles.label}>Usuario</label>
      <input
        style={styles.input}
        name="username"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
        required
      />
      <label style={styles.label}>Contraseña</label>
      <input
        style={styles.input}
        name="password"
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button style={styles.button} type="submit">Registrar</button>
      {msg && <div style={styles.success}>{msg}</div>}
      {error && <div style={styles.error}>{error}</div>}
    </form>
  );
};

export default RegisterForm; 