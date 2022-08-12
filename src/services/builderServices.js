import axios from "axios";
import { apiUrl } from "../services/apiUrl";

const getAllProperties = () => {
  axios.get(apiUrl).then((res) => {
    return res.data;
  });
};

export { getAllProperties };
