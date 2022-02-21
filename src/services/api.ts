/* eslint-disable prettier/prettier */
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: false, // default
    method: 'GET',// default,
    decompress: true // default

});


