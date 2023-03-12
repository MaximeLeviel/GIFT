import { Badge, Button, Group, Table } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { Link } from "react-router-dom";
import Student from "../entities/Student";
import StudentsService from "../services/studentService";

interface StudentsListProps {
  elements: Student[];
}

export default function Tables({ elements }: StudentsListProps) {
  async function removeStudent(id: number) {
    const res = await StudentsService.removeStudent(id);
  }

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.lastName?.toUpperCase()}</td>
      <td>{element.firstName}</td>
      <td>
        <Badge
          variant="gradient"
          gradient={
            element.visitForm
              ? { from: "teal", to: "lime" }
              : { from: "red", to: "pink" }
          }
        >
          {upperFirst(element.visitForm ? "ok" : "not ok")}
        </Badge>
      </td>
      <td>
        <Badge
          variant="gradient"
          gradient={
            element.missionDescription
              ? { from: "teal", to: "lime" }
              : { from: "red", to: "pink" }
          }
        >
          {upperFirst(element.missionDescription ? "ok" : "not ok")}
        </Badge>
      </td>
      <td>{element.comment}</td>
      <td>
        <Group>
          <Link to={"/students/" + element.id}>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              uppercase
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="gradient"
            gradient={{ from: "red", to: "red" }}
            uppercase
            onClick={() => removeStudent(element.id!)}
          >
            Remove
          </Button>
        </Group>
      </td>
    </tr>
  ));
  return (
    <Table verticalSpacing="xs" fontSize="md" striped highlightOnHover>
      <thead>
        <tr>
          <th>Last name</th>
          <th>First name</th>
          <th>Visit form</th>
          <th>Mission desc.</th>
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
