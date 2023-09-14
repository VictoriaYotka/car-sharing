import axios from "axios";

const baseUrl = "https://648ffaf51e6aa71680ca523f.mockapi.io/project/";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
