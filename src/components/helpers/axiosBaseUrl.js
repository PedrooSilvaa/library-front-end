import axios  from "axios";

const baseURL = 'http://localhost:8080';

const baseRequest = axios.create({
  baseURL: baseURL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default baseRequest;
// module.exports = baseRequest;