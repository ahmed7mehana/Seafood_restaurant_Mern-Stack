import axios from "axios";

const request = axios.create({
    baseURL:"https://sea-food.onrender.com/"
});

export default request;
