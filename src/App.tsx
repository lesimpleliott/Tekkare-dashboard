import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataHospitals from "./assets/datas/data_exemple1.json";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import { useHospitalStore } from "./stores/datas.store";

const App = () => {
  const root = document.getElementById("root");
  root!.className = "flex max-h-dvh relative overflow-hidden";

  // Chargement des données (Hostipals) dans le store
  const setHospitals = useHospitalStore((state) => state.setHospitals);
  useEffect(() => {
    setHospitals(dataHospitals as []);
  }, [setHospitals]);

  // Chargement de la langue par défaut
  const { i18n } = useTranslation();
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!lang) {
      localStorage.setItem("lang", i18n.language);
    } else {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hospital/:hospitalId" element={<Hospital />} />
        <Route path="*" element={"error"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
