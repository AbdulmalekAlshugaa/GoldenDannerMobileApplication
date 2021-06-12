import { create } from "apisauce";

const apiClent = create({
  baseURL: "http://192.168.0.114:3000/api/v1/",
});

export default apiClent;
