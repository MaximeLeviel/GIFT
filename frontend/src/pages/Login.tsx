import { NotificationsProvider } from "@mantine/notifications";
import Authentication from "../components/Authentication";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {

    const [schoolTutor, setSchoolTutor] = useState(null);

    return (
    <NotificationsProvider position={"top-right"} zIndex={3015}>
        {schoolTutor ? (
            <Navigate to="/home" replace />
        ) : (
            <Authentication setSchoolTutor={setSchoolTutor} />
        )}
    </NotificationsProvider>
  );
}
