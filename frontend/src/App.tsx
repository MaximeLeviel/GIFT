import { MantineProvider } from "@mantine/core";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {

  const [schoolTutor, setSchoolTutor] = useState(null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/login" element={<Login />} />      
 

        </Route>
      </Routes>
    </MantineProvider>
  );
}