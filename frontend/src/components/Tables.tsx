import { Badge, Button, Table } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";

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
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={() =>
            showNotification({
              title: "Under construction",
              message:
                "This resource is not yet available. Sorry for the inconvenience",
              color: "white",
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.orange[6],
                  borderColor: theme.colors.orange[6],

                  "&::before": { backgroundColor: theme.white },
                },

                title: { color: theme.white },
                description: { color: theme.white },
                closeButton: {
                  color: theme.white,
                  "&:hover": { backgroundColor: theme.colors.orange[8] },
                },
              }),
            })
          }
          uppercase
        >
          Edit
        </Button>
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