import axios, { AxiosError, CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.simkl.com/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    "simkl-api-key":
      "e7811d204f7313d34c8a132150122fb9ab4aaccbb21c27360d030d193707d33f",
  },
});
export { AxiosError, CanceledError };
export default apiClient;
