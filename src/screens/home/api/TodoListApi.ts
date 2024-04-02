import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos';
export const fetchToDoList = async () => {
  return await axios.get(url).then(response => response.data);
};
