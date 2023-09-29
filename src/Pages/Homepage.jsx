import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Homepage() {
  const [activeComponent, setActiveComponent] = useState("login");
  return (
    <div>
      <Login
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Signup
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
    </div>
  );
}

export default Homepage;
