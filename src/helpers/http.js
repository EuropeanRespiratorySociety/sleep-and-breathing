import axios from "axios";

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ERS_API,
  headers: {
    "Content-Type": "application/json"
  }
});
