import { Badge, Button, Table } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface StudentsListProps {
  elements: {
    id: number;
    lastName: string;
    firstName: string;
    missionDescription: string;
    comment: string;
    visitForm: string;
  }[];
}

export default function Tables({ elements }: StudentsListProps) {
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.lastName.toUpperCase()}</td>
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
        <Link to={"/students/" + element.id}>
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={() => {
            setStudentId(element.id);
            routeChange();
          }}
          uppercase
        >
          Edit
        </Button>
        </Link>
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
