import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pathForLabel } from "../../../models/navigation.js";
import styles from "./Footer.module.css";
import flag from "../../../assets/images/icons/16.png";

const wideQuery = "(min-width: 834px)";

/** True when the footer should stay in columns instead of collapsed rows. */
function useWideScreen() {
  const [wide, setWide] = useState(() => window.matchMedia(wideQuery).matches);

  useEffect(() => {
    const media = window.matchMedia(wideQuery);
    const update = () => setWide(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return wide;
}

/**
 * One titled list of footer links.
 * @param {object} props
 * @param {string} props.title
 * @param {string[]} props.links
 * @param {boolean} props.wide Whether the directory stays expanded in columns.
 * @returns {import("react").JSX.Element}
 */
function LinkGroup({ title, links, wide }) {
  const [open, setOpen] = useState(false);

  return (
    <details
      className={styles.group}
      open={wide || open}
      onToggle={(event) => {
        if (!wide) setOpen(event.currentTarget.open);
      }}
    >
      <summary className={styles.summary}>
        <span>{title}</span>
        <svg className={styles.chevron} viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M2.2 4.3 6 8l3.8-3.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <ul>
        {links.map((label) => {
          const to = pathForLabel(label);
          return (
            <li key={label}>
              {to ? <Link to={to}>{label}</Link> : <a href="#">{label}</a>}
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/**
 * Site footer. Link data comes from the footer model through FooterController.
 * @param {object} props
 * @param {import("../../../models/footer.js").LinkGroup[][]} props.columns
 * @param {string[]} props.legalLinks
 * @returns {import("react").JSX.Element}
 */
export default function Footer({ columns, legalLinks }) {
  const wide = useWideScreen();

  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.upperTextContainer}>
          <p>
            Student portfolio layout. Not affiliated with Apple. Prices, phone
            numbers, financing, and account links are left out on purpose.
          </p>
        </div>

        <div className={styles.footerLinksWrapper}>
          {columns.map((column) => (
            <div
              className={styles.column}
              key={column.map((group) => group.title).join("-")}
            >
              {column.map((group) => (
                <LinkGroup
                  key={group.title}
                  title={group.title}
                  links={group.links}
                  wide={wide}
                />
              ))}
            </div>
          ))}
        </div>

        <div className={`${styles.copyrightWrapper} row`}>
          <div className="copyright col-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Student portfolio layout. Not affiliated with Apple.
          </div>
          <div
            className={`${styles.footerLinksTerms} col-12 order-3 col-lg-6 order-lg-2`}
          >
            <ul>
              {legalLinks.map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 order-1 col-md-4 order-md-2 text-md-end col-lg-2 order-lg-3">
            <div className={styles.flagWrapper}>
              <img src={flag} alt="" />
            </div>
            <div className={styles.footerCountryName}>United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
