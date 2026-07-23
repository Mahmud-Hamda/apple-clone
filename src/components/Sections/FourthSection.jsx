import React from "react";
import styles from "./FourthSection.module.css";



export default function FourthSection() {
  return (
    <section className={styles.fourthHighlightWrapper}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Side: iPhone 11 */}
          <div className={`col-sm-12 col-md-6 ${styles.leftSideWrapper}`}>
            <div className={styles.leftSideContainer}>
              <div className={styles.titleWrapper}>iPhone 11</div>
              <div className={styles.descriptionWrapper}>
                Just the right amount of everything.
              </div>
              <div className={styles.priceWrapper}>
                From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
              </div>

              <div className={styles.linksWrapper}>
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Apply now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: CDC Announcement */}
          <div className={`col-sm-12 col-md-6 ${styles.rightSideWrapper}`}>
            <div className={styles.rightSideContainer}>
              <div className={`${styles.titleWrapper} ${styles.white}`}>
                Get the latest CDC response to COVID-19.
              </div>

              <div className={`${styles.linksWrapper} ${styles.white}`}>
                <ul>
                  <li>
                    <a href="#">Watch the PSA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}