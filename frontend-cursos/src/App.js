import React, { useEffect, useState } from "react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "./services/api";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response.data);
  };

  useEffect(() => {
    if (isAuthenticated) fetchCourses();
  }, [isAuthenticated]);

  const handleCreateOrUpdate = async (course) => {
    if (course._id) {
      await updateCourse(course._id, course);
    } else {
      await createCourse(course);
    }
    setSelectedCourse(null);
    fetchCourses();
  };

  const handleEdit = (course) => setSelectedCourse(course);

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  const handleCancel = () => setSelectedCourse(null);

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: 400, margin: "auto" }}>
        {showRegister ? (
          <>
            <RegisterForm onRegister={() => setShowRegister(false)} />
            <p style={{ textAlign: "center" }}>
              ¿Ya tienes cuenta?{" "}
              <button style={{ color: "#1976d2", background: "none", border: "none", cursor: "pointer" }} onClick={() => setShowRegister(false)}>
                Inicia sesión
              </button>
            </p>
          </>
        ) : (
          <>
            <LoginForm onLogin={handleLogin} />
            <p style={{ textAlign: "center" }}>
              ¿No tienes cuenta?{" "}
              <button style={{ color: "#1976d2", background: "none", border: "none", cursor: "pointer" }} onClick={() => setShowRegister(true)}>
                Regístrate
              </button>
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1></h1>
        <button onClick={handleLogout} style={{ background: "#e53935", color: "#fff", border: "none", borderRadius: "4px", padding: "8px 16px", fontWeight: "bold", cursor: "pointer" }}>
          Cerrar sesión
        </button>
      </div>
      <CourseForm
        onSubmit={handleCreateOrUpdate}
        selectedCourse={selectedCourse}
        onCancel={handleCancel}
      />
      <CourseList courses={courses} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;