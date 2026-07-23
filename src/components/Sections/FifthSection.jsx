import React from "react";
import styles from "./FifthSection.module.css";

import appleTvLogo from "../../assets/images/icons/apple-tv-logo.png";
import bankerLogo from "../../assets/images/home/banker.png";
import watchLogo from "../../assets/images/icons/watch-series5-logo.png";

  export default function FifthSection() {
  return (
    <section className={styles.fifthHighlightWrapper}>
      <div className={`container-fluid ${styles.fifthHighlightContainer}`}>
        <div className="row">
          {/* Left Side: Apple TV+ / The Banker */}
          <div className={`col-sm-12 col-md-6 ${styles.leftSideWrapper}`}>
            <div className={styles.leftSideContainer}>
              <div className={styles.topLogoWrapper}>
                <div className={styles.logoWrapper}>
                  <img src={appleTvLogo} alt="Apple TV Logo" />
                </div>
              </div>

              <div className={styles.tvshowLogoWrapper}>
                <img src={bankerLogo} alt="The Banker Logo" />
              </div>

              <div className={styles.watchMoreWrapper}>
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>

          {/* Right Side: Apple Watch Series 5 */}
          <div className={`col-sm-12 col-md-6 ${styles.rightSideWrapper}`}>
            <div className={styles.rightSideContainer}>
              <div className={styles.topLogoWrapper}>
                <div className={styles.logoWrapper}>
                  <img src={watchLogo} alt="Apple Watch Series 5 Logo" />
                </div>
              </div>

              <div className={styles.descriptionWrapper}>
                With the Always-On Retina display.<br />
                You’ve never seen a watch like this.
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
          </div>
        </div>
      </div>
    </section>
  );
}