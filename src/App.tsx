import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

const App = () => {
  const root = document.getElementById("root");
  root!.className = "flex min-h-dvh relative";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:hospitalId" element={<Hospital />} /> */}
        <Route path="*" element={"error"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
