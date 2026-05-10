import {
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import VineyardDetails from "./pages/VineyardDetails";

import LanguageDropdown from "./components/LanguageDropdown";

function App() {

  return (

    <>

      <LanguageDropdown />

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/vineyard"
          element={<VineyardDetails />}
        />

      </Routes>

    </>
  );
}

export default App;