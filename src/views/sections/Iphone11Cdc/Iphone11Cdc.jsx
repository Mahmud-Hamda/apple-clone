import styles from "./Iphone11Cdc.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";

/**
 * Split band for iPhone 11 and the COVID-19 public-service announcement.
 * @param {object} [props]
 * @param {"iphone"} [props.panel] Show only the iPhone 11 photo and its copy.
 * @returns {import("react").JSX.Element}
 */
export default function Iphone11Cdc({ panel }) {
  const iphoneOnly = panel === "iphone";
  const column = iphoneOnly ? "col-12" : "col-sm-12 col-md-6";

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={`${column} ${styles.leftSideWrapper}`}>
            <div className={styles.leftSideContainer}>
              <div className={styles.titleWrapper}>iPhone 11</div>
              <div className={styles.descriptionWrapper}>
                Just the right amount of everything.
              </div>
              <CtaLinks
                className={styles.linksWrapper}
                links={[{ label: "See this page", to: "/iphone" }]}
              />
            </div>
          </div>

          {iphoneOnly ? null : (
            <div className={`${column} ${styles.rightSideWrapper}`}>
              <div className={styles.rightSideContainer}>
                <div className={`${styles.titleWrapper} ${styles.white}`}>
                  Public-service layout sample.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
