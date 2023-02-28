import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import * as userService from "../services/userService";
import { AxiosError } from "axios";
import Admin from "../entities/SchoolTutor";
import "../styles/global.scss";

interface AuthenticationProps {
  setSchoolTutor: (user: any) => void;
}

export default function Authentication(props: AuthenticationProps) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const signIn = () => {
    if (!form.values.email || !form.values.password) {
      showNotification({
        title: "Error",
        message: "Please fill in all the fields",
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

    const admin: Admin = new Admin(form.values.email, form.values.password);

    userService
      .loginUser(admin)
      .then((response: any) => {
        showNotification({
          title: "Logged in",
          message: `You have been logged in as ${response.firstName} ${response.lastName}`,
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
        props.setSchoolTutor(response);
      })
      .catch((error: AxiosError) => {
        if (!error.response) {
          showNotification({
            title: "Error",
            message: error.message,
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
        if (error.response.status.toString().startsWith("5")) {
          showNotification({
            title: "Error",
            message: "Server error, please contact an administrator",
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
        } else {
          showNotification({
            title: "Error",
            message: "Wrong email or password",
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
        }
      });
  };

  const login = () => {
    //TODO: To delete when the API calls are done
    props.setSchoolTutor({ firstName: "John", lastName: "Doe" });
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
        <Title align="center" className="title">
          Welcome back!
        </Title>

        <Paper withBorder shadow="md" p={50} mt={30} radius="md">
          <TextInput
            id="authentication-email-input"
            label="Email"
            placeholder="email@example.com"
            value={form.values.email}
            onChange={(e) => form.setFieldValue("email", e.target.value)}
            required
          />
          <PasswordInput
            id="authentication-password-input"
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(e) => form.setFieldValue("password", e.target.value)}
            required
            mt="md"
          />
          <Button
            id="authentication-button-submit"
            fullWidth
            mt="xl"
            onClick={signIn}
            type={"submit"}
            uppercase
          >
            {"Sign in"}
          </Button>
          {
            //TODO: To delete when the API calls are done
          }
          <Button fullWidth mt="xl" type={"submit"} onClick={login} uppercase>
            {"(DEV) Sign in as John Doe)"}
          </Button>
        </Paper>
      </Container>
    </Container>
  );
}
