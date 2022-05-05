import axios from "axios";
import { apiURL } from "./apiURL";

const API = apiURL();

// Files Routes

export const getAllFilesTest = async () => {
    let { data } = await axios.get(`${API}/files`);
    return data.payload;
  };




