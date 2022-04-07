import axios from "axios";

export default class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8080/api/",
    });
  }
}