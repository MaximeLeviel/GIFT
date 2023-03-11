import { NotificationsProvider } from "@mantine/notifications";
import Authentication from "../components/Authentication";
import "../styles/global.scss";

interface LoginProps {
    setSchoolTutor: (user: any) => void;
}

export default function Login({ setSchoolTutor }: LoginProps) {
    return (
        <NotificationsProvider position={"top-right"} zIndex={3015}>
            <Authentication setSchoolTutor={setSchoolTutor} />
        </NotificationsProvider>
    );
}