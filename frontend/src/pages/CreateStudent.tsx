import {
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import Navbar from "../components/Navbar";
import SchoolTutor from "../entities/SchoolTutor";
import { Dispatch, SetStateAction, useState } from "react";
import { Plus, X } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

interface DetailsProps {
  schoolTutor: SchoolTutor;
  setSchoolTutor: Dispatch<SetStateAction<null>>;
}

export default function CreateStudent({
  schoolTutor,
  setSchoolTutor,
}: DetailsProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyTutor, setCompanyTutor] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [missionDesc, setMissionDesc] = useState("");
  const [comment, setComment] = useState("");
  const [formVisit, setFormVisit] = useState("");
  let navigate = useNavigate();

  const createUser = () => {
    //TODO : make API call to create user
    // using : firstName, lastName, groupName, companyName, companyAddress, companyTutor, startDate, endDate, missionDesc, comment, formVisit
    navigate("/home");
  };

  return (
    <>
      <Navbar user={schoolTutor} setUser={setSchoolTutor} />
      <Container my="md">
        <Grid>
          <Grid.Col xs={6}>
            <Text mb={5}>Student details:</Text>
            <Paper shadow="md" p="xl" withBorder>
              <TextInput
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
                label="First name"
                placeholder="First name"
                inputWrapperOrder={["label", "input", "description"]}
              />
              <TextInput
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
                label="Last name"
                placeholder="Last name"
                inputWrapperOrder={["label", "input", "description"]}
              />
              <TextInput
                value={groupName}
                onChange={(e) => setGroupName(e.currentTarget.value)}
                label="Group name"
                placeholder="Group name"
                inputWrapperOrder={["label", "input", "description"]}
              />
            </Paper>
          </Grid.Col>
          <Grid.Col xs={6}>
            <Text mb={5}>Company details:</Text>
            <Paper shadow="md" p="xl" withBorder>
              <TextInput
                value={companyName}
                onChange={(e) => setCompanyName(e.currentTarget.value)}
                label="Name"
                placeholder="Name"
                inputWrapperOrder={["label", "input", "description"]}
              />
              <TextInput
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.currentTarget.value)}
                label="Address"
                placeholder="Address"
                inputWrapperOrder={["label", "input", "description"]}
              />
              <TextInput
                value={companyTutor}
                onChange={(e) => setCompanyTutor(e.currentTarget.value)}
                label="Tutor"
                placeholder="Tutor"
                inputWrapperOrder={["label", "input", "description"]}
              />
              <DateInput
                value={startDate}
                onChange={setStartDate}
                label="Start date"
                placeholder="Start date"
                maw={400}
                mx="auto"
              />
              <DateInput
                value={endDate}
                onChange={setEndDate}
                label="End date"
                placeholder="End date"
                maw={400}
                mx="auto"
              />
            </Paper>
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text mb={5}>Internship details:</Text>
            <Paper shadow="md" p="xl" withBorder>
              <Textarea
                autosize
                value={missionDesc}
                onChange={(e) => setMissionDesc(e.currentTarget.value)}
                placeholder="Mission description"
                label="Mission description"
              />
              <Textarea
                autosize
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}
                placeholder="Comment"
                label="Comment"
              />
              <Textarea
                autosize
                value={formVisit}
                onChange={(e) => setFormVisit(e.currentTarget.value)}
                placeholder="Visit form"
                label="Visit form"
              />
            </Paper>
          </Grid.Col>
        </Grid>
        <Group m={10}>
          <Button
            leftIcon={<X size="1rem" />}
            color={"red"}
            onClick={() => navigate("/home")}
          >
            Cancel
          </Button>
          <Button
            leftIcon={<Plus size="1rem" />}
            color={"green"}
            onClick={createUser}
          >
            Create student
          </Button>
        </Group>
      </Container>
    </>
  );
}
