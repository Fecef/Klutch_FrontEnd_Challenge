import axios from "axios";

export const api = axios.create({
  baseURL: "https://klutch-challenge.onrender.com/api",
});
