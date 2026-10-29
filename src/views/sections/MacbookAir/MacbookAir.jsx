import styles from "./MacbookAir.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";

/**
 * MacBook Air hero.
 * @returns {import("react").JSX.Element}
 */
export default function MacbookAir() {
  return (
    <section className={styles.band}>
      <div className="container">
        <div className={styles.newAlert}>New</div>
        <div className={`${styles.titleWrapper} ${styles.bold} ${styles.black}`}>
          MacBook Air
        </div>
        <div className={`${styles.descriptionWrapper} ${styles.black}`}>
          Twice the speed. Twice the storage.
        </div>
        <div className={`${styles.priceWrapper} ${styles.grey}`}>From $999.</div>
        <CtaLinks
          className={styles.linksWrapper}
          links={[{ label: "Learn more" }, { label: "Buy" }]}
        />
      </div>
    </section>
  );
}
