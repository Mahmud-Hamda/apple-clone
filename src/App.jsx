import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FooterController from "./controllers/FooterController.jsx";
import HeaderController from "./controllers/HeaderController.jsx";
import HomeController from "./controllers/HomeController.jsx";
import SearchController from "./controllers/SearchController.jsx";
import SectionController from "./controllers/SectionController.jsx";

/**
 * Scrolls to the top when the route changes.
 * @returns {null}
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Application routes. The header and footer stay mounted on every page.
 * @returns {import("react").JSX.Element}
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderController />
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/search" element={<SearchController />} />
        <Route path="/:section" element={<SectionController />} />
      </Routes>
      <FooterController />
    </BrowserRouter>
  );
}
