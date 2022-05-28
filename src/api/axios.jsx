import axios from "axios";
const token = "duffel_test_5DWKg4pxWSp2x4-n-0Do2Af5uaK-ToBqBGILUXSJOVY";
const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
    "Duffel-Version": "beta",
    Authorization: "Bearer " + token,
  },
});
export default {
  createSearchFlight: (data) =>
    apiClient({
      method: "post",
      url: "/offer_requests",
      data,
    }),
  getDetailsFlight: (id) =>
    apiClient({
      method: "GET",
      url: `/offers/${id}`,
    }),
};
