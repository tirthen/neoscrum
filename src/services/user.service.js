import AxiosService from "./Axios/Axios.service";
import { environment } from "../../environments/environment.ts";
let axios = new AxiosService();
export default class UserService {
  async getReceiverData() {
    return await axios.get(`${environment.apiUrl}/dashboard`);
  }

  async addFeedBack(body) {
    return await axios.post(`${environment.apiUrl}/addfeedback`, body);
  }

  async getFeedBack() {
    return await axios.get(`${environment.apiUrl}/feedback`);
  }
}
