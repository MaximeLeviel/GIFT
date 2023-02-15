import {
  Button,
  createStyles,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Check } from "tabler-icons-react";
import { useForm } from "@mantine/form";

interface AuthenticationProps {
  setUser: (user: any) => void;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Authentication(props: AuthenticationProps) {
  const { classes } = useStyles();

  const login = () => {
    props.setUser({ name: "John Doe" });
    showNotification({
      title: "Logged in",
      message: "You have been logged in",
      color: "teal",
      icon: <Check />,
    });
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome !
        </Title>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="example@mail.com"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
          </Stack>

          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
          <Button fullWidth mt="xl" size="md" onClick={login}>
            (DEV) Go to home page
          </Button>
        </form>
      </Paper>
    </div>
  );
}
