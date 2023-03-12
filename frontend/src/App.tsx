import { MantineProvider } from "@mantine/core";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDetails from "./pages/StudentDetails";

export default function App() {

  const [schoolTutor, setSchoolTutor] = useState(null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/login" element={ 
          schoolTutor ? 
          ( <Navigate to="/home" /> ) 
          : 
          (<Login setSchoolTutor={setSchoolTutor} />)
        }
        />
        <Route path="/home" element={ 
          schoolTutor ? 
          ( <Home schoolTutor={schoolTutor} setSchoolTutor={setSchoolTutor} /> ) 
          : 
          ( <Navigate to="/login" /> )
        }
        />
        <Route path="/students/:id" element={ 
          schoolTutor ? 
          ( <StudentDetails schoolTutor={schoolTutor} setSchoolTutor={setSchoolTutor}/> ) 
          : 
          ( <Navigate to="/login" /> )
        }
        />
        
        <Route path="/*" element={ 
          schoolTutor ? 
          ( <Navigate to="/home" /> ) 
          : 
          (<Login setSchoolTutor={setSchoolTutor} />)
        } />
      </Routes>
    </MantineProvider>
  );
}