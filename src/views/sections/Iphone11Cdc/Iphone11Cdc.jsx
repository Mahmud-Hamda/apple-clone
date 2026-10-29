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
              <div className={styles.priceWrapper}>
                From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
              </div>
              <CtaLinks
                className={styles.linksWrapper}
                links={[{ label: "Learn more" }, { label: "Apply now" }]}
              />
            </div>
          </div>

          {iphoneOnly ? null : (
            <div className={`${column} ${styles.rightSideWrapper}`}>
              <div className={styles.rightSideContainer}>
                <div className={`${styles.titleWrapper} ${styles.white}`}>
                  Get the latest CDC response to COVID-19.
                </div>
                <CtaLinks
                  className={`${styles.linksWrapper} ${styles.white}`}
                  links={[{ label: "Watch the PSA" }]}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
