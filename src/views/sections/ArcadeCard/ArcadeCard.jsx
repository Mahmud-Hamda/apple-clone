import styles from "./ArcadeCard.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";
import arcadeLogo from "../../../assets/images/icons/arcade.png";

/**
 * Split band for a show-art sample and a watch layout sample.
 * @returns {import("react").JSX.Element}
 */
export default function ArcadeCard() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-sm-12 col-md-6 ${styles.leftSideWrapper}`}>
            <div className={styles.leftSideContainer}>
              <img src={arcadeLogo} alt="Apple Arcade" />
              <div className={`${styles.descriptionWrapper} ${styles.white}`}>
                Agent 8 is a small hero on a big mission.
              </div>
              <CtaLinks
                className={`${styles.linksWrapper} ${styles.white}`}
                links={[{ label: "Sample panel" }]}
              />
            </div>
          </div>

          <div className={`col-sm-12 col-md-6 ${styles.rightSideWrapper}`}>
            <div className={styles.rightSideContainer}>
              <div className={styles.titleWrapper}>Layout sample</div>
              <div className={styles.descriptionWrapper}>
                A second panel. Nothing here is for sale.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
