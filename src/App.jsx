import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import VineyardDetails from "./pages/VineyardDetails";
import LanguageDropdown from "./components/LanguageDropdown";
import EmptyLand from "./pages/EmptyLand";
import DroughtFruitGuide from "./pages/DroughtFruitGuide";
import DroughtFlowerGuide from "./pages/DroughtFlowerGuide";
import DroughtCerealGuide from "./pages/DroughtCerealGuide";
import DroughtHerbGuide from "./pages/DroughtHerbGuide";

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
          element={<Register />}/>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/vineyard"
          element={<VineyardDetails />}
        />
          <Route
          path="/empty-land"
          element={<EmptyLand />}
        />
         <Route
  path="/fruit-guide"
  element={<DroughtFruitGuide />}
/>

<Route
  path="/flower-guide"
  element={<DroughtFlowerGuide />}
/>

<Route
  path="/cereal-guide"
  element={<DroughtCerealGuide />}
/>

<Route
  path="/herb-guide"
  element={<DroughtHerbGuide />}
/>

      </Routes>

    </>
  );
}

export default App;