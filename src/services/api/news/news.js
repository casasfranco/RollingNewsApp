import axios from "axios";
import { WSData } from "../wsData";

let urlController = "";

export class News {
  constructor(http) {
    urlController = WSData.urlServ + "/noticia";
  }

  getAllNews() {
    return axios
      .get(urlController, {
        headers: {
          token: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        return res.data;
      });
  }
}
