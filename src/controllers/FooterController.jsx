import { footerColumns, legalLinks } from "../models/footer.js";
import Footer from "../views/layout/Footer/Footer.jsx";

/**
 * Passes footer content from the model into the footer view.
 * @returns {import("react").JSX.Element}
 */
export default function FooterController() {
  return <Footer columns={footerColumns} legalLinks={legalLinks} />;
}
