import axios from "axios";

export function setupApiClient() {
  const api = axios.create({
    baseURL: 'http://localhost:4000'
  });

  return api;
}
