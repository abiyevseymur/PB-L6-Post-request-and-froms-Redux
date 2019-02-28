import axios from 'axios'


export const jsonPlaceHolder = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
  });

