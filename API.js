import Axios from "axios";

Axios.defaults.timeout = 30000;

export default Axios.create({
    baseURL: "https://fakestoreapi.com/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
