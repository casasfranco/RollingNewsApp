import axios from "axios";
import { WSData } from "../wsData";

let urlController = "";

export class Auth {
  constructor(http) {
    urlController = WSData.urlServ + "/autenticar";
  }

  login(data) {
    return axios
      .post(urlController, data)
      .then((res) => {
        return res.data;
      });
  }
}