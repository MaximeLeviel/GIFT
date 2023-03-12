import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Student from "../entities/Student";
import StudentsService from "../services/studentService";
import Details from "./Details";

export default function UpdateStudent() {
  var { id } = useParams();
  const [student, setStudent] = useState({} as Student);

  useEffect(() => {
    const res = StudentsService.getSudentById(Number(id)).then((res) =>
      setStudent(res)
    );
  }, []);

  return <Details currentStudent={student} />;
}
