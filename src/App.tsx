import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductListPage from "@/pages/ProductListPage";
import ProductsOverviewPage from "@/pages/ProductsOverviewPage";
import FactoriesPage from "@/pages/FactoriesPage";
import HomePage from "@/pages/HomePage";
import QualityPage from "@/pages/QualityPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductsOverviewPage />} />
    <Route path="/products/list" element={<ProductListPage />} />
    <Route path="/products/detail/:productName?" element={<ProductDetailPage />} />
    <Route path="/factories" element={<FactoriesPage />} />
    <Route path="/quality" element={<QualityPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;

