import Authentication from "../components/Authentication";
import "../styles/global.scss";

interface LoginProps {
  setSchoolTutor: (user: any) => void;
}

export default function Login({ setSchoolTutor }: LoginProps) {
  return <Authentication setSchoolTutor={setSchoolTutor} />;
}
