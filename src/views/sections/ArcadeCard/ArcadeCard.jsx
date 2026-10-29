import styles from "./ArcadeCard.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";
import arcadeLogo from "../../../assets/images/icons/arcade.png";

/**
 * Split band for Apple Arcade and Apple Card Monthly Installments.
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
                links={[
                  { label: "Play now", note: "2" },
                  { label: "Learn about Apple Arcade" },
                ]}
              />
            </div>
          </div>

          <div className={`col-sm-12 col-md-6 ${styles.rightSideWrapper}`}>
            <div className={styles.rightSideContainer}>
              <div className={styles.titleWrapper}>
                Apple Card Monthly Installments
              </div>
              <div className={styles.descriptionWrapper}>
                Pay for your next iPhone over time, interest-free with Apple
                Card.
              </div>
              <CtaLinks
                className={styles.linksWrapper}
                links={[{ label: "Learn more" }, { label: "Apply now" }]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
