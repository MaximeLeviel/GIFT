import { Button } from "@mantine/core";

interface HomeProps {
  setUser: (user: any) => void;
}

export default function Home(props: HomeProps) {
  const logout = () => {
    props.setUser(null);
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
