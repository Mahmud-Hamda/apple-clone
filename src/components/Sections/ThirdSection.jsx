import styles from "./ThirdSection.module.css";

export default function ThirdSection() {
  return (
    <section className={styles.thirdHighlightWrapper}>
      <div className="container">
        <div className={`${styles.titleWrapper} ${styles.bold}`}>
          iPhone 11 Pro
        </div>

        <div className={styles.descriptionWrapper}>
          Pro cameras. Pro display. Pro performance.
        </div>

        <div className={styles.priceWrapper}>
          From $24.95/mo. or $599 with trade‑in.
        </div>

        <div className={styles.linksWrapper}>
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
