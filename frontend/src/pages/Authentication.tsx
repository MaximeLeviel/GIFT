import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import "../styles/global.scss";

interface AuthenticationProps {
  setUser: (user: any) => void;
}

export default function Authentication(props: AuthenticationProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if (email === "" || password === "") {
      showNotification({
        title: "Error",
        message: "Please fill in all fields",
        color: "white",
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.red[6],
            borderColor: theme.colors.red[6],

            "&::before": { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.red[8] },
          },
        }),
      });
      return;
    }
    //TODO: Doing API calls to sign in and print notification error if any
  };

  const login = () => {
    //TODO: To delete when the API calls are done
    props.setUser({ name: "John Doe" });
    showNotification({
      title: "Logged in",
      message: "You have been logged in",
      color: "white",
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.teal[6],
          borderColor: theme.colors.teal[6],

          "&::before": { backgroundColor: theme.white },
        },

        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.teal[8] },
        },
      }),
    });
  };

  return (
    <Container id={"authentication"} sx={{ maxWidth: 100000 }}>
      <Container size={600} pt={175}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>

        <Paper withBorder shadow="md" p={50} mt={30} radius="md">
          <TextInput
            id="authentication-email-input"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />
          <PasswordInput
            id="authentication-password-input"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
            mt="md"
          />
          <Button
            id="authentication-button-submit"
            fullWidth
            mt="xl"
            onClick={signIn}
          >
            Sign in
          </Button>
          <Button fullWidth mt="xl" onClick={login}>
            (DEV) Sign in as John Doe
          </Button>
        </Paper>
      </Container>
    </Container>
  );
}
