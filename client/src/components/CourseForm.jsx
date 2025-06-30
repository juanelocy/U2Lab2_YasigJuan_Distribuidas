import React, { useState } from 'react';
import { createCourse } from '../services/courseService';

export const CourseForm = ({ onCourseAdded }) => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createCourse(form);
    onCourseAdded();
    setForm({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
      <input name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
};
