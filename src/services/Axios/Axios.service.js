import Axios from "axios";

export default class AxiosService {
  async get(url) {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    return Axios.get(url, config);
  }
  async post(url, data) {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    return Axios.post(url, data, config);
  }
  async patch() {
    return;
  }

  async delete() {
    return;
  }
}
