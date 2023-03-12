import * as httpService from "./httpService";
import APICONSTANTS from "../constants/constants";

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
