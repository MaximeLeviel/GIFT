import * as httpService from "./httpService";
import APICONSTANTS from "../constants/constants";
import Student from "../entities/Student";

export default class StudentsService {
  public static getStudents() {
    return httpService
      .get(APICONSTANTS.STUDENT)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
