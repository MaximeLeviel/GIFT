import { Button, Container, Image, Text, Title } from "@mantine/core";

interface HomeProps {
  setUser: (user: any) => void;
}

export default function Home(props: HomeProps) {
  const logout = () => {
    props.setUser(null);
  };
  return (
    <div>
      <Container>
        <div className="inner">
          <div className="content">
            <Title className="title">
              Welcome to the <span className="highlight">tutor's</span> portal
            </Title>
            <Text color="dimmed" mt="md">
              myEfrei is your new extranet platform. It will gradually replace
              the Group Efrei campus extranet and will eventually become your
              single point of access to applications and partner sites.
              <br />
              <br />
              The site will evolve in the near future and the functionalities
              will be expanded over the months...
            </Text>
          </div>
          <Image
            radius={"md"}
            src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="image"
            alt="student-and-professor"
          />
        </div>
        <Button variant="outline" onClick={logout}>
          Log out
        </Button>
      </Container>
    </div>
  );
}
