import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://nameless-basin-44037.herokuapp.com/grade/',
  //baseURL: 'http://localhost:3001/grade/',
  //baseURL: 'http://localhost:8081/grade/',
  headers: {
    'Content-type': 'application/json',
  },
});
