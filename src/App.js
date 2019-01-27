import React from "react";
import ClassComponentOne from "./components/classComponents/One";
import ClassComponentTwo from "./components/classComponents/Two";
import ClassComponentThree from "./components/classComponents/Three";
import ClassComponentFour from "./components/classComponents/Four";
import ClassComponentFive from "./components/classComponents/Five";
import ClassComponentSix from "./components/classComponents/Six";

import "./App.css";

const App = ()  => {
  return (
    <div className="App">
      <div className="container">
        <ClassComponentOne />
        <ClassComponentTwo />
        <ClassComponentThree />
        <ClassComponentFour />
        <ClassComponentFive />
        <ClassComponentSix />
      </div>
    </div>
  );
}

export default App;
