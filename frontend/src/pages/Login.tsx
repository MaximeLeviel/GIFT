import { NotificationsProvider } from "@mantine/notifications";
import Authentication from "../components/Authentication";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

export default function Login() {

    const [schoolTutor, setSchoolTutor] = useState(null);

    return (
    <NotificationsProvider position={"top-right"} zIndex={3015}>
        {schoolTutor ? (
            <Home schoolTutor={schoolTutor} setSchoolTutor={setSchoolTutor} />
        ) : (
            <Authentication setSchoolTutor={setSchoolTutor} />
        )}
    </NotificationsProvider>
  );
}
