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

  public static createStudent(student: Student) {
    return httpService
      .post(APICONSTANTS.STUDENT, student)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  public static removeStudent(id: number) {
    return httpService
      .destroy(APICONSTANTS.STUDENT, id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  public static getSudentById(id: number) {
    return httpService
      .get(APICONSTANTS.STUDENT + "/" + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  public static updateStudent(student: Student) {
    return httpService
      .put(APICONSTANTS.STUDENT + "/" + student.id, student)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
