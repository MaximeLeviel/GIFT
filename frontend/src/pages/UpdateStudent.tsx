import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router";
import SchoolTutor from "../entities/SchoolTutor";
import Student from "../entities/Student";
import StudentsService from "../services/studentService";
import Details from "./Details";

interface UpdateStudentProps {
  schoolTutor: SchoolTutor;
  setSchoolTutor: Dispatch<SetStateAction<null>>;
}

export default function UpdateStudent ({
    schoolTutor,
    setSchoolTutor,
}: UpdateStudentProps) {
    var { id } = useParams();
    const [student, setStudent] = useState({} as Student);

    useEffect( () => {
        const res = StudentsService.getSudentById(Number(id)).then(res => setStudent(res));
    }, []);

    return (
        <Details
            schoolTutor={schoolTutor}
            setSchoolTutor={setSchoolTutor}
            currentStudent={student}
        />
    );
}