import { NotificationsProvider } from "@mantine/notifications";
import Authentication from "../components/Authentication";
import { useState } from "react";
import Home from "./Home";

export default function Login() {

    const [user, setUser] = useState(null);
    return (
    <NotificationsProvider position={"top-right"} zIndex={3015}>
        {user ? (
            <Home setUser={setUser} />
        ) : (
            <Authentication setUser={setUser} />
        )}
    </NotificationsProvider>
    );
}

