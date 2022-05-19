import axios from "axios";
// const token = "duffel_test_5DWKg4pxWSp2x4-n-0Do2Af5uaK-ToBqBGILUXSJOVY";
const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
    "Duffel-Version": "beta",
    Authorization: "Bearer " + 'ss',
  },
});
export default {
  getData: () =>
    apiClient({
      method: "GET",
      url: "/offers/off_0000AJGnawjswahM2icenq",
    }),
  createSearchFlight: (data) =>
    apiClient({
      method: "post",
      url: "/offer/search",
      data,
    }),
};
