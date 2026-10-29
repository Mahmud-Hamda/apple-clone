import styles from "./AppleTvWatch.module.css";
import CtaLinks from "../../ui/CtaLinks.jsx";
import appleTvLogo from "../../../assets/images/icons/apple-tv-logo.png";
import bankerLogo from "../../../assets/images/home/banker.png";
import watchLogo from "../../../assets/images/icons/watch-series5-logo.png";

/**
 * Split band for Apple TV+ and Apple Watch Series 5.
 * @param {object} [props]
 * @param {"tv" | "watch"} [props.panel] Show one product photo and its copy.
 * @returns {import("react").JSX.Element}
 */
export default function AppleTvWatch({ panel }) {
  const showTv = panel !== "watch";
  const showWatch = panel !== "tv";
  const column = panel ? "col-12" : "col-sm-12 col-md-6";

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {showTv ? (
            <div className={`${column} ${styles.leftSideWrapper}`}>
              <div className={styles.leftSideContainer}>
                <img src={appleTvLogo} alt="Apple TV" />
                <div className={styles.tvshowLogoWrapper}>
                  <img src={bankerLogo} alt="The Banker" />
                </div>
                <div className={styles.watchMoreWrapper}>
                  <span>Sample show art</span>
                </div>
              </div>
            </div>
          ) : null}

          {showWatch ? (
            <div className={`${column} ${styles.rightSideWrapper}`}>
              <div className={styles.rightSideContainer}>
                <img src={watchLogo} alt="Apple Watch Series 5" />
                <div className={styles.descriptionWrapper}>
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <CtaLinks
                  className={styles.linksWrapper}
                  links={[{ label: "See this page", to: "/watch" }]}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
