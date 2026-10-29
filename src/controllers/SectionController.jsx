import { useParams } from "react-router-dom";
import { navigationItems } from "../models/navigation.js";
import AppleTvWatch from "../views/sections/AppleTvWatch/AppleTvWatch.jsx";
import IpadPro from "../views/sections/IpadPro/IpadPro.jsx";
import Iphone11Cdc from "../views/sections/Iphone11Cdc/Iphone11Cdc.jsx";
import Iphone11Pro from "../views/sections/Iphone11Pro/Iphone11Pro.jsx";
import MacbookAir from "../views/sections/MacbookAir/MacbookAir.jsx";
import SectionPage from "../views/pages/SectionPage.jsx";

/**
 * Product photo and copy shown for each header item that has one.
 * @type {Record<string, import("react").JSX.Element>}
 */
const productSections = {
  mac: <MacbookAir />,
  iphone: (
    <>
      <Iphone11Pro />
      <Iphone11Cdc panel="iphone" />
    </>
  ),
  ipad: <IpadPro />,
  watch: <AppleTvWatch panel="watch" />,
  tv: <AppleTvWatch panel="tv" />,
};

/**
 * Opens the product photo for a header route, or a short page when none exists.
 * @returns {import("react").JSX.Element}
 */
export default function SectionController() {
  const { section } = useParams();
  const product = productSections[section];

  if (product) {
    return <main className="productPage">{product}</main>;
  }

  const item = navigationItems.find((entry) => entry.to === `/${section}`);

  if (!item) {
    return (
      <SectionPage
        title="Page not found"
        summary="That page is not part of this clone."
      />
    );
  }

  return <SectionPage title={item.label} summary={item.summary} />;
}
