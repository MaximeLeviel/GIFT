import * as httpService from "./httpService";
import APICONSTANTS from "../constants/constants";
import User from "../entities/User";

export function getUsers() {
  return httpService
    .get(APICONSTANTS.USER)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function getUserById(id: number) {
  return httpService
    .get(`${APICONSTANTS.USER}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function saveUser(data: User) {
  return httpService
    .post(APICONSTANTS.USER, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function editUser(data: User) {
  return httpService
    .put(APICONSTANTS.USER, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function removeUser(id: number) {
  return httpService
    .destroy(APICONSTANTS.USER, id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function loginUser(data: User) {
  return httpService
    .post(APICONSTANTS.USER + "/login", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
