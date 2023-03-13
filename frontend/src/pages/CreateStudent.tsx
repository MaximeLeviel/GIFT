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
import { useState } from "react";
import { Plus, X } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import StudentsService from "../services/studentService";
import Student from "../entities/Student";

const emptyStudent = {} as Student;
export default function CreateStudent() {
    const [student, setStudent] = useState(emptyStudent);
    let navigate = useNavigate();

    const createStudent = async () => {
        await StudentsService.createStudent(student);
        navigate("/home");
    };

    const onChange = (field: string, value: string) => {
      setStudent({ ...student, [field]: value });
    };
  
    const setStartDate = (Date: Date) => {
      setStudent({ ...student, startDate: Date });
    };
  
    const setEndDate = (Date: Date) => {
      setStudent({ ...student, endDate: Date });
    };

    return (
        <>
            <Navbar />
            <Container my="md">
                <Grid>
                <Grid.Col xs={6}>
                    <Text mb={5}>Student details:</Text>
                    <Paper shadow="md" p="xl" withBorder>
                    <TextInput
                        value={student.firstName}
                        onChange={(e) => onChange(e.currentTarget.value, "firstName")}
                        label="First name"
                        placeholder="First name"
                        inputWrapperOrder={["label", "input", "description"]}
                    />
                    <TextInput
                        value={student.lastName}
                        onChange={(e) => onChange(e.currentTarget.value, "lastName")}
                        label="Last name"
                        placeholder="Last name"
                        inputWrapperOrder={["label", "input", "description"]}
                    />
                    <TextInput
                        value={student.groupName}
                        onChange={(e) => onChange(e.currentTarget.value, "groupName")}
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
                        value={student.companyName}
                        onChange={(e) => onChange(e.currentTarget.value, "companyName")}
                        label="Name"
                        placeholder="Name"
                        inputWrapperOrder={["label", "input", "description"]}
                    />
                    <TextInput
                        value={student.companyAddress}
                        onChange={(e) =>
                          onChange(e.currentTarget.value, "companyAddress")
                        }
                        label="Address"
                        placeholder="Address"
                        inputWrapperOrder={["label", "input", "description"]}
                    />
                    <TextInput
                        value={student.companyTutor}
                        onChange={(e) =>
                          onChange(e.currentTarget.value, "companyTutor")
                        }
                        label="Tutor"
                        placeholder="Tutor"
                        inputWrapperOrder={["label", "input", "description"]}
                    />
                    <DateInput
                        value={student.startDate}
                        onChange={setStartDate}
                        label="Start date"
                        placeholder="Start date"
                        maw={400}
                        mx="auto"
                    />
                    <DateInput
                        value={student.endDate}
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
                        value={student.missionDescription}
                        onChange={(e) =>
                          onChange(e.currentTarget.value, "missionDescription")
                        }
                        placeholder="Mission description"
                        label="Mission description"
                    />
                    <Textarea
                        autosize
                        value={student.comment}
                        onChange={(e) => onChange(e.currentTarget.value, "comment")}
                        placeholder="Comment"
                        label="Comment"
                    />
                    <Textarea
                        autosize
                        value={student.visitForm}
                        onChange={(e) => onChange(e.currentTarget.value, "visitForm")}
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
                    onClick={createStudent}
                >
                    Create student
                </Button>
                </Group>
            </Container>
        </>
    );
}
