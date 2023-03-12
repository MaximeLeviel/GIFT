import { MantineProvider } from "@mantine/core";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Notifications } from "@mantine/notifications";
import Details from "./pages/Details";
import CreateStudent from "./pages/CreateStudent";

export default function App() {
  const [schoolTutor, setSchoolTutor] = useState(null);
  const [studentId, setStudentId] = useState(-1);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position={"top-right"} zIndex={3015} />
      <Routes>
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
          path="/home"
          element={
            schoolTutor ? (
              <Home
                schoolTutor={schoolTutor}
                setSchoolTutor={setSchoolTutor}
                setStudentId={setStudentId}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/create-student"
          element={
            schoolTutor ? (
              <CreateStudent
                schoolTutor={schoolTutor}
                setSchoolTutor={setSchoolTutor}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/details"
          element={
            schoolTutor && studentId >= 0 ? (
              <Details
                schoolTutor={schoolTutor}
                setSchoolTutor={setSchoolTutor}
                studentId={studentId}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/*"
          element={
            schoolTutor ? (
              <Navigate to="/home" />
            ) : (
              <Login setSchoolTutor={setSchoolTutor} />
            )
          }
        />
      </Routes>
    </MantineProvider>
  );
}
