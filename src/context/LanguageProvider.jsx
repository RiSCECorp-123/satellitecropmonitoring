import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

const translations = {
  en: {
    login: `Farmer's Login`,
    register: "Register as Farmer",
    guest: "Enter as Guest",
    name: "Name",
    password: "Password",
    dashboard: "Dashboard",
    fieldDescriptions: "Field Descriptions",
    wheatField: "Wheat Field",
    cornField: "Corn Field",
    vineyardField: "Vineyard Field",
    barrelLand: "Barrel Land",
  },
  de: {
    login: "Landwirte Anmeldung",
    register: "Registrieren",
    guest: "Als Gast eintreten",
    name: "Name",
    password: "Passwort",
    dashboard: "Armaturenbrett",
    fieldDescriptions: "Feldbeschreibungen",
    wheatField: "Weizenfeld",
    cornField: "Maisfeld",
    vineyardField: "Weinberg",
    barrelLand: "Brachland",
  },
  es: {
    login: "Inicio Agricultor",
    register: "Registrar",
    guest: "Entrar como invitado",
    name: "Nombre",
    password: "Contraseña",
    dashboard: "Panel",
    fieldDescriptions: "Descripción de Campos",
    wheatField: "Campo de Trigo",
    cornField: "Campo de Maíz",
    vineyardField: "Viñedo",
    barrelLand: "Terreno Vacío",
  },
  ro: {
    login: "Autentificare Fermieri",
    register: "Înregistrare",
    guest: "Intră ca invitat",
    name: "Nume",
    password: "Parolă",
    dashboard: "Tablou de Bord",
    fieldDescriptions: "Descrierea Terenurilor",
    wheatField: "Câmp de Grâu",
    cornField: "Câmp de Porumb",
    vineyardField: "Podgorie",
    barrelLand: "Teren Gol",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
