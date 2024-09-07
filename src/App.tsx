import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Hospital from "./pages/Hospital";

const App = () => {
  const root = document.getElementById("root");
  root!.className = "flex max-h-dvh relative overflow-hidden";

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
