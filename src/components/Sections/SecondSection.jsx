import React from "react";
import styles from "./SecondSection.module.css";

export default function SecondSection() {
  return (
    <section className={styles.secondHighlightWrapper}>
      <div className="container">
        <div className={styles.newAlert}>New</div>

        <div className={`${styles.titleWrapper} ${styles.bold} ${styles.black}`}>
          MacBook Air
        </div>

        <div className={`${styles.descriptionWrapper} ${styles.black}`}>
          Twice the speed. Twice the storage.
        </div>

        <div className={`${styles.priceWrapper} ${styles.grey}`}>
          From $999.
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