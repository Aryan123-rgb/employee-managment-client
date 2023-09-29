import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegistrationPage from "./Pages/RegistrationPage";
import DashBoard from "./Pages/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
