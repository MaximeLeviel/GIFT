import axios from "axios";
import config from "../config";

const API_BASE_URL = config.apiBaseUrl[process.env.NODE_ENV || "development"];

export function get(resourceName, params = {}) {
  let config = {
    method: "get",
    url: `${API_BASE_URL}/${resourceName}`,
    params: params,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
    },
  };
  return axios(config);
}

export function post(resourceName, data) {
  let config = {
    method: "post",
    url: `${API_BASE_URL}/${resourceName}`,
    data: data,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
    },
  };
  return axios(config);
}

export function put(resourceName, data) {
  let config = {
    method: "put",
    url: `${API_BASE_URL}/${resourceName}`,
    data: data,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
    },
  };
  return axios(config);
}

export function destroy(resourceName, id) {
  let config = {
    method: "delete",
    url: `${API_BASE_URL}/${resourceName}/${id}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
    },
  };
  return axios(config);
}
