import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AboutPage from "../modules/about/AboutPage";
import ContactPage from "../modules/contact/ContactPage";
import HomePage from "../modules/home/HomePage";
import PortfolioPage from "../modules/portfolio/PortfolioPage";
import ServicesPage from "../modules/services/ServicesPage";

export default function App() {
  return (
    <MainLayout>
      {/* NON-CODER NOTE:
        These are the website pages. To add a new page later, create a module
        inside src/modules and add another <Route /> line here.
      */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
}
