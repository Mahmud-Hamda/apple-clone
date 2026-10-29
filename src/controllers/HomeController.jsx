import AlertBanner from "../views/layout/AlertBanner/AlertBanner.jsx";
import AppleTvWatch from "../views/sections/AppleTvWatch/AppleTvWatch.jsx";
import ArcadeCard from "../views/sections/ArcadeCard/ArcadeCard.jsx";
import IpadPro from "../views/sections/IpadPro/IpadPro.jsx";
import Iphone11Cdc from "../views/sections/Iphone11Cdc/Iphone11Cdc.jsx";
import Iphone11Pro from "../views/sections/Iphone11Pro/Iphone11Pro.jsx";
import MacbookAir from "../views/sections/MacbookAir/MacbookAir.jsx";

/**
 * Homepage content. Header and footer are mounted by the router.
 * @returns {import("react").JSX.Element}
 */
export default function HomeController() {
  return (
    <main>
      <AlertBanner />
      <IpadPro />
      <MacbookAir />
      <Iphone11Pro />
      <Iphone11Cdc />
      <AppleTvWatch />
      <ArcadeCard />
    </main>
  );
}
