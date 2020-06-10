import Axios from "axios";
import { environment } from "../../environments/environment.ts";

export default class AuthService {
  async login(data) {
    let headers = {
      "Content-Type": "application/json",
    };
    let config = {
      headers: headers,
    };
    return await Axios.post(`${environment.apiUrl}/login`, data, config);
  }

  async register(data) {
    let headers = {
      "Content-Type": "application/json",
    };
    let config = {
      headers: headers,
    };
    return await Axios.post(`${environment.apiUrl}/registration`, data, config);
  }
}
