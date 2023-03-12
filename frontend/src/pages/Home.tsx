import {
  Button,
  Container,
  Divider,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Navbar from "../components/Navbar";
import SchoolTutor from "../entities/SchoolTutor";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Tables from "../components/Tables";
import StudentsService from "../services/studentService";
import { Link } from "react-router-dom";

interface HomeProps {
  schoolTutor: SchoolTutor;
  setSchoolTutor: Dispatch<SetStateAction<null>>;
}

const students = [
  {
    id: 0,
    firstName: "Edouard",
    lastName: "Baer",
    missionDescription: "",
    comment: "Comment1",
    visitForm: "blblbl",
  },
  {
    id: 1,
    firstName: "Alizee",
    lastName: "Poignant",
    missionDescription: "blblbl",
    comment: "Comment2",
    visitForm: "",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Youn",
    missionDescription: "",
    comment: "Example comment",
    visitForm: "",
  },
  {
    id: 3,
    firstName: "Hugo",
    lastName: "Stephan",
    missionDescription: "blblbl",
    comment: "Ready",
    visitForm: "blblbl",
  },
];

export default function Home({ schoolTutor, setSchoolTutor }: HomeProps) {
  const [liststudents, setStudents] = useState<any[]>();

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await StudentsService.getStudents();
        console.log(res);
        setStudents(res);
      } catch (err) {
        console.log("Couldn't fetch students");
      }
    };
    fetchPortfolios();
  }, [liststudents]);

  return (
    <>
      <Navbar user={schoolTutor} setUser={setSchoolTutor} />
      <Container>
        <div className="inner">
          <div className="content">
            <Title className="title">
              Welcome to the <span className="highlight">tutor's</span> portal
            </Title>
            <Text color="dimmed" mt="md">
              myEfrei is your new extranet platform. It will gradually replace
              the Group Efrei campus extranet and will eventually become your
              single point of access to applications and partner sites.
              <br />
              <br />
              The site will evolve in the near future and the functionalities
              will be expanded over the months...
            </Text>
          </div>
          <Image
            radius={"md"}
            src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="image"
            alt="student-and-professor"
          />
        </div>
        <Stack>
          <Title>Students list:</Title>
          <Link to={"/students/create"}>
            <Button variant="gradient" gradient={{ from: "teal", to: "lime" }}>
              Create new student
            </Button>
          </Link>
          <Divider />
          {liststudents && (
            <div>{liststudents.map((student) => student.firstName)}</div>
          )}
          <Tables elements={students} />
        </Stack>
      </Container>
    </>
  );
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
