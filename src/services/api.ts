import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("@kenzieHub:token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

export default api;
