import { MantineProvider } from "@mantine/core";
import Login from "./pages/Login";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";


export default function App() {
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
