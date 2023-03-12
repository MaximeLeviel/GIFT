import { MantineProvider } from "@mantine/core";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Notifications } from "@mantine/notifications";
import Details from "./pages/Details";
import UpdateStudent from "./pages/UpdateStudent";

export default function App() {
  const [schoolTutor, setSchoolTutor] = useLocalStorage("schoolTutor", null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position={"top-right"} zIndex={3015} />
      <Routes>
        <Route
          path="/home"
          element={
            schoolTutor ? (
              <Home schoolTutor={schoolTutor} setSchoolTutor={setSchoolTutor} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/students/create"
          element={
            schoolTutor ? (
              <Details
                schoolTutor={schoolTutor}
                setSchoolTutor={setSchoolTutor}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/students/:id"
          element={
            schoolTutor ? (
              <UpdateStudent
                schoolTutor={schoolTutor}
                setSchoolTutor={setSchoolTutor}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Redirect from /login to /home if already connected */}
        <Route
          path="/login"
          element={
            schoolTutor ? (
              <Navigate to="/home" />
            ) : (
              <Login setSchoolTutor={setSchoolTutor} />
            )
          }
        />
        <Route
          path="/*"
          element={
            schoolTutor ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </MantineProvider>
  );
}