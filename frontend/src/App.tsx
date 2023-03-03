import { MantineProvider } from "@mantine/core";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Authentication from "./components/Authentication";
import Login from "./pages/Login";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/login" element={<Login />} />      

          <Route path="/home" element={<Home setUser={setUser}/>} />

        </Route>
      </Routes>
    </MantineProvider>
  );
}