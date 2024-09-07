import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataHospitals from "./assets/datas/data_exemple1.json";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import { useHospitalStore } from "./stores/datas.store";

const App = () => {
  const root = document.getElementById("root");
  root!.className = "flex max-h-dvh relative overflow-hidden";

  const setHospitals = useHospitalStore((state) => state.setHospitals);
  useEffect(() => {
    setHospitals(dataHospitals as []);
  }, [setHospitals]);

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
