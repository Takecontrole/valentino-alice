import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-clothing.adaptable.app",
});

export default instance;
