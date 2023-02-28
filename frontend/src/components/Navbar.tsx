import {
  ActionIcon,
  Container,
  Divider,
  Group,
  Header,
  Text,
} from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { Logout, School } from "tabler-icons-react";
import SchoolTutor from "../entities/SchoolTutor";

interface HeaderSimpleProps {
  user: SchoolTutor;
  setUser: Dispatch<SetStateAction<null>>;
}

export default function Navbar({ user, setUser }: HeaderSimpleProps) {
  return (
    <Header height={60} mb={120}>
      <Container id="navbar">
        <School size={28} color={"blue"} />
        <Group spacing={10}>
          <div>
            <Text id="navbar_name">{`${user.firstName} ${user.lastName}`}</Text>
            <Text id="navbar_email" size="xs" color="dimmed">
              {user.email}
            </Text>
          </div>
          <Divider orientation="vertical" />
          <ActionIcon title="Log out" size={"lg"}>
            <Logout color={"blue"} onClick={() => setUser(null)} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
