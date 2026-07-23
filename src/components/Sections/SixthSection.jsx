import styles from "./SixthSection.module.css";

import arcadeLogo from "../../assets/images/icons/arcade.png";

export default function SixthSection() {
  return (
    <section className={styles.sixthHighlightWrapper}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Side: Apple Arcade / Spyder */}
          <div className={`col-sm-12 col-md-6 ${styles.leftSideWrapper}`}>
            <div className={styles.leftSideContainer}>
              <div className={styles.topLogoWrapper}>
                <div className={styles.logoWrapper}>
                  <img src={arcadeLogo} alt="Apple Arcade Logo" />
                </div>
              </div>

              <div className={`${styles.descriptionWrapper} ${styles.white}`}>
                Agent 8 is a small hero on a big mission.
              </div>

              <div className={`${styles.linksWrapper} ${styles.white}`}>
                <ul>
                  <li>
                    <a href="#">
                      Play now<sup>2</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">Learn about Apple Arcade</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Apple Card Monthly Installments */}
          <div className={`col-sm-12 col-md-6 ${styles.rightSideWrapper}`}>
            <div className={styles.rightSideContainer}>
              <div className={styles.titleWrapper}>
                Apple Card Monthly Installments
              </div>

              <div className={styles.descriptionWrapper}>
                Pay for your next iPhone over time, interest-free with Apple
                Card.
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
        </div>
      </div>
    </section>
  );
}
