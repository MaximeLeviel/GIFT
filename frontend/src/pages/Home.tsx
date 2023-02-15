import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Check } from "tabler-icons-react";

interface HomeProps {
  setUser: (user: any) => void;
}

export default function Home(props: HomeProps) {
  const logout = () => {
    props.setUser(null);
    showNotification({
      title: "Logged out",
      message: "You have been logged out",
      color: "teal",
      icon: <Check />,
    });
  };
  return (
    <div>
      <h1>Home page !</h1>
      <Button variant="outline" onClick={logout}>
        Log out
      </Button>
    </div>
  );
}
