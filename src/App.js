import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegistrationPage from "./Pages/RegistrationPage";
import DashBoard from "./Pages/DashBoard";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
