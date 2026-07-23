import React from "react";
import styles from "./FirstSection.module.css";
export default function FirstSection() {
  return (
    <section className={styles.firstHighlightWrapper}>
      <div className="container">
        <div className={styles.newAlert}>New</div>

        <div className={`${styles.titleWrapper} ${styles.bold} ${styles.black}`}>
          iPad Pro
        </div>

        <div className={styles.linksWrapper}>
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </div>

        <div className={`${styles.ipodCaption} row`}>
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
}