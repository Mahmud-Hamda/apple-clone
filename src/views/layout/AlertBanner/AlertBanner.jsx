import styles from "./AlertBanner.module.css";

/**
 * States that this page is a class layout, not a store.
 * @returns {import("react").JSX.Element}
 */
export default function AlertBanner() {
  return (
    <section className={styles.alertSection} aria-label="About this page">
      <div className="container">
        <div className={styles.alertTitle}>Student portfolio layout</div>
        <div className={styles.alertText}>
          This is a class project. It is not an Apple website. Nothing here is
          for sale, and this page does not collect payment, phone numbers, or
          account details.
        </div>
      </div>
    </section>
  );
}
