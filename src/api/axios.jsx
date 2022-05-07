
import axios from "axios";
const token = 'duffel_test_5DWKg4pxWSp2x4-n-0Do2Af5uaK-ToBqBGILUXSJOVY'
const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Accept": 'application/json' ,
    "Duffel-Version": "beta" ,
    "Authorization": "Bearer " + token,
  },
 
});
export default {
  getData: () =>
  instance({
    method: "GET",
    url: "/offers/off_0000AJDLenKLKJBpWxZEWp",
  }),
};