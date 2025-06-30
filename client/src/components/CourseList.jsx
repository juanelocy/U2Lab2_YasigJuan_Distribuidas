import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/courseService';

export const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div>
      <h2>Listado de Cursos</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.name} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
