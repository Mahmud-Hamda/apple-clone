import styles from "./Iphone11Pro.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";

/**
 * iPhone 11 Pro hero.
 * @returns {import("react").JSX.Element}
 */
export default function Iphone11Pro() {
  return (
    <section className={styles.band}>
      <div className="container">
        <div className={`${styles.titleWrapper} ${styles.bold}`}>iPhone 11 Pro</div>
        <div className={styles.descriptionWrapper}>
          Pro cameras. Pro display. Pro performance.
        </div>
        <div className={styles.priceWrapper}>
          From $24.95/mo. or $599 with trade‑in.
        </div>
        <CtaLinks
          className={styles.linksWrapper}
          links={[{ label: "Learn more" }, { label: "Buy" }]}
        />
      </div>
    </section>
  );
}
