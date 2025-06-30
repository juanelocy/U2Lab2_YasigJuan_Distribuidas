import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/course",
});

export const getCourses = () => api.get("/");
export const createCourse = (course) => api.post("/", course);
export const updateCourse = (id, course) => api.put(`/${id}`, course);
export const deleteCourse = (id) => api.delete(`/${id}`);