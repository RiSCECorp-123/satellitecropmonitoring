import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageDropdown = () => {
  const { setLang } = useContext(LanguageContext);

  return (
    <select onChange={(e) => setLang(e.target.value)}>
      <option value="en">English</option>
      <option value="de">German</option>
      <option value="es">Spanish</option>
      <option value="ro">Romanian</option>
    </select>
  );
};

export default LanguageDropdown;