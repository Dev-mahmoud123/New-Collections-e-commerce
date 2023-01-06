import axios from "axios";
import { API_URL } from "../redux/type/productType";


  function CallApi (endpoint, method = "GET", body) {
  return  axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((error) => console.log(error));
}

export default CallApi;
