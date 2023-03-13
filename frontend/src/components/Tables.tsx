import {
  Badge,
  Button,
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { keys } from "@mantine/utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, Selector } from "tabler-icons-react";
import StudentsService from "../services/studentService";

interface RowData {
  id: string;
  lastName: string;
  firstName: string;
  missionDescription: string;
  comment: string;
  visitForm: string;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? ChevronUp : ChevronDown) : Selector;
  return (
    <th className="th">
      <UnstyledButton onClick={onSort} className="control">
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center id="#icon">
            <Icon />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

export default function Tables({ data }: TableSortProps) {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  async function removeUser(id: string) {
    await StudentsService.removeStudent(Number(id));
  }

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((element) => (
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
            onClick={() => removeUser(element.id)}
          >
            Remove
          </Button>
        </Group>
      </td>
    </tr>
  ));
  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<Search size="0.9rem" />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table verticalSpacing="xs" fontSize="md" striped highlightOnHover>
        <thead>
          <tr>
            <Th
              sorted={sortBy === "lastName"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("lastName")}
            >
              Last name
            </Th>
            <Th
              sorted={sortBy === "firstName"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("firstName")}
            >
              First name
            </Th>
            <Th
              sorted={sortBy === "visitForm"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("visitForm")}
            >
              Visit form
            </Th>
            <Th
              sorted={sortBy === "missionDescription"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("missionDescription")}
            >
              Mission desc.
            </Th>
            <Th
              sorted={sortBy === "comment"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("comment")}
            >
              Comment
            </Th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
