
import { Container, Divider, Image, Stack, Text, Title  } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SchoolTutor from "../entities/SchoolTutor";
import "../styles/global.scss";

interface StudentProps {
    schoolTutor: SchoolTutor;
    setSchoolTutor: Dispatch<SetStateAction<null>>;
}
  
const student = {
    
        id: 1,
        firstName: "student",
        lastName: "john",
        groupName: "A",
        internship: {
            id: 1,
            missionDescription: "Stage développeur fullstack",
            comment: "Nice comment",
            visitForm: "Blablablablabla"
        },
        company: {
            id: 1,
            name: "Company A",
            address: "11 Rue de l'Avenue, Paris, France",
            tutor: "Jean Tutor",
            startDate: 1678575600000,
            endDate: 1678834800000
        }
    
}

export default function StudentDetails({ schoolTutor, setSchoolTutor }: StudentProps){
    let { id } = useParams();
    return (
        <>
        <>
          <Navbar user={schoolTutor} setUser={setSchoolTutor} />
        {student && <Container>
            <div className="inner">
              <div className="content">
                <Title className="title">
                  {student.firstName} {student.lastName}
                </Title>
                <Text color="dimmed">
                  myEfrei is your new extranet platform. It will gradually replace
                  the Group Efrei campus extranet and will eventually become your
                  single point of access to applications and partner sites.
                  <br />
                  <br />
                  The site will evolve in the near future and the functionalities
                  will be expanded over the months...
                </Text>
              </div>
            </div>
            <Stack>
              <Title>Students list:</Title>
              
            </Stack>
          </Container>}
        </>
      </>
    );
}