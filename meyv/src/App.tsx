import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/AboutPage";
import FactoriesPage from "@/pages/FactoriesPage";
import HomePage from "@/pages/HomePage";
import QualityPage from "@/pages/QualityPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/factories" element={<FactoriesPage />} />
    <Route path="/quality" element={<QualityPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;

