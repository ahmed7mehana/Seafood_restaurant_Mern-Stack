import axios from "axios";

const request = axios.create({
    baseURL:"http://sea-food.onrender.com"
});

export default request;
