import styles from "./IpadPro.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";

/**
 * iPad Pro hero.
 * @returns {import("react").JSX.Element}
 */
export default function IpadPro() {
  return (
    <section className={styles.band}>
      <div className="container">
        <div className={styles.newAlert}>New</div>
        <div className={`${styles.titleWrapper} ${styles.bold} ${styles.black}`}>
          iPad Pro
        </div>
        <CtaLinks
          className={styles.linksWrapper}
          links={[{ label: "Learn more" }, { label: "Order" }]}
        />
        <div className={`${styles.caption} row`}>
          <div className="col-sm-12 col-md-6 text-md-end">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-start">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
}
