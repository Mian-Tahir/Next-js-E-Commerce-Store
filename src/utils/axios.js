import axios from "axios";

export const baseDomain = "https://fakestoreapi.com";
// export const baseDomain = "http://16.171.148.251:9000/";

export const axiosInstance = axios.create({
  baseURL: baseDomain,
});

const ResponseInterceptor = (response) => {
  return response;
};

const RequestInterceptor = (config) => {
  return config;
};

axiosInstance.interceptors.request.use(RequestInterceptor);
axiosInstance.interceptors.response.use(ResponseInterceptor, (error) => {
  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 509
  ) {
    return Promise.reject(error.response);
  } else {
    return Promise.reject(error);
  }
});
