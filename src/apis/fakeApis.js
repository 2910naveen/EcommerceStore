import axios from 'axios';

export const fakeApiCalls = axios.create(
    {
        baseURL:"https://fakestoreapi.com/"
    }
);