// defines routes that the front end can call

import axios from 'axios';
const getAllUsers = "/";

export default function getAllUsers() {
  return axios.get('/');
}
  
