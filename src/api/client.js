import { create } from "apisauce";

const apiClent = create({
  baseURL: "https://danner2.herokuapp.com/api/v1/",
});

export default apiClent;
