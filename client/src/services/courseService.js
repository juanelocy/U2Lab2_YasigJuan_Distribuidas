// src/services/courseService.js
const API_URL = 'http://localhost:3000/api/courses'; // Cambia el puerto si tu backend usa otro

export const getCourses = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createCourse = async (course) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  });
  return await res.json();
};
