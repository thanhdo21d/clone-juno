import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
