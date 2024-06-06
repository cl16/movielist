import axios from 'axios';

export default axios.create({
    baseURL:'https://3de5-2607-fea8-571c-a3f0-244a-c4a7-6021-b38d.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});