import axios from "axios";
const token = "duffel_test_5DWKg4pxWSp2x4-n-0Do2Af5uaK-ToBqBGILUXSJOVY";
const instance = axios.create({
  baseURL: "https://api.duffel.com/air/",
  headers: {
    Authorization: "Bearer " + token,
    // accept: "application/json",
    // "Accept-Encoding": "gzip; q=0",
    // "Duffel-Version": "beta",
    // "x-csrf-token": token,
    //
  },
});
export default {
  getData: () =>
    instance({
      method: "GET",
      url: "/offers/off_0000AJ0G8Sp25pcNGy75Au",
    }),
};
