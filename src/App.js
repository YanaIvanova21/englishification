import React from "react";
import "./App.css";
import Home from "./components/Home";
import CourseContent from "./components/CourseContent";
import Servicebox from "./components/Servicebox";

function App() {
  return (
    <React.Fragment>
      <Home></Home>
      <CourseContent></CourseContent>
      <Servicebox></Servicebox>
    </React.Fragment>
  );
}

export default App;
