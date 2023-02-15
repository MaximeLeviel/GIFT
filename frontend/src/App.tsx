import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider position={"top-right"} zIndex={3015}>
        {user ? (
          <Home setUser={setUser} />
        ) : (
          <Authentication setUser={setUser} />
        )}
      </NotificationsProvider>
    </MantineProvider>
  );
}
