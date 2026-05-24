import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const getMenu = () => api.get("/menu");
export const getEvents = () => api.get("/events");
export const getReservations = () => api.get("/reservations");
export const getInfo = () => api.get("/info");
export const createReservation = (data) => api.post("/reservations", data);
export const cancelReservation = (id) => api.delete(`/reservations/${id}`);
