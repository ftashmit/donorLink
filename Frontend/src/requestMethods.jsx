// src/requestMethods.js
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api"; // Adjust this to your backend URL

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
