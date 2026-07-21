import axios from "axios";

const api = axios.create({
  baseURL: "https://healthcare-system-beta.vercel.app/api",
});

export default api;