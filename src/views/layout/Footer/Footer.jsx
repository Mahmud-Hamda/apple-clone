import { Link } from "react-router-dom";
import { pathForLabel } from "../../../models/navigation.js";
import styles from "./Footer.module.css";
import flag from "../../../assets/images/icons/16.png";

/**
 * One titled list of footer links.
 * @param {object} props
 * @param {string} props.title
 * @param {string[]} props.links
 * @returns {import("react").JSX.Element}
 */
function LinkGroup({ title, links }) {
  return (
    <>
      <h3>{title}</h3>
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
    </>
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
  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.upperTextContainer}>
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the{" "}
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms </a> apply.
          </p>
        </div>

        <div className={`${styles.footerLinksWrapper} row`}>
          {columns.map((column) => (
            <div
              className="col-12 col-md"
              key={column.map((group) => group.title).join("-")}
            >
              {column.map((group) => (
                <LinkGroup
                  key={group.title}
                  title={group.title}
                  links={group.links}
                />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.myAppleWrapper}>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        <div className={`${styles.copyrightWrapper} row`}>
          <div className="copyright col-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
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
