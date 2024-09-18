import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </BrowserRouter>
  );
}
