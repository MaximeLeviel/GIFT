import { MantineProvider } from "@mantine/core";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import { Notifications } from "@mantine/notifications";
import Details from "./pages/Details";
import Login from "./pages/Login";
import CreateStudent from "./pages/CreateStudent";

export default function App() {
  const [schoolTutor, setSchoolTutor] = useLocalStorage("schoolTutor", null);
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position={"top-right"} zIndex={3015} />
      <Routes>
        <Route
          path="/home"
          element={schoolTutor ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/students/create"
          element={schoolTutor ? <CreateStudent /> : <Navigate to="/login" />}
        />
        <Route
          path="/students/:id"
          element={schoolTutor ? <Details /> : <Navigate to="/login" />}
        />
        {/* Redirect from /login to /home if already connected */}
        <Route
          path="/login"
          element={schoolTutor ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/*"
          element={
            schoolTutor ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </MantineProvider>
  );
}
