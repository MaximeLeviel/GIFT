import {
  ActionIcon,
  Container,
  Divider,
  Group,
  Header,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { Logout, School } from "tabler-icons-react";
import SchoolTutor from "../entities/SchoolTutor";

export default function Navbar() {
  const [user, setUser] = useState<SchoolTutor>(
    JSON.parse(localStorage.getItem("schoolTutor") || "null")
  );
  const logout = () => {
    localStorage.setItem("token", JSON.stringify(null));
    localStorage.setItem("schoolTutor", JSON.stringify(null));
  };

  return (
    <Header height={60}>
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
            <Logout color={"blue"} onClick={logout} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
