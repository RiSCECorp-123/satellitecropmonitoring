import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LanguageDropdown from "./components/LanguageDropdown";

import VineyardDetails from "./pages/VineyardDetails";
function App() {
  return (
    <BrowserRouter>
      <LanguageDropdown />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route
          path="/vineyard"
          element={<VineyardDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;