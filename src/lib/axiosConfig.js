import axios from "axios";

const axiosConfig = axios.create({
   baseURL: "https://druglist.iran.liara.run/",
});
// axiosConfig.defaults.headers.post["Authorization"] = `Bearer+${s}`; // for GET requests

export default axiosConfig;
