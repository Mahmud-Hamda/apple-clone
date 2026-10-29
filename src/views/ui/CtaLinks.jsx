import { Link } from "react-router-dom";

/**
 * Row of promotional calls to action shared by the homepage sections.
 * @param {object} props
 * @param {string} [props.className] Wrapper class from the parent CSS module.
 * @param {{ to?: string, href?: string, label: string, note?: string }[]} props.links
 * @returns {import("react").JSX.Element}
 */
export default function CtaLinks({ className, links }) {
  return (
    <div className={className ? `ctaLinks ${className}` : "ctaLinks"}>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
              <Link to={link.to}>
                {link.label}
                {link.note ? <sup>{link.note}</sup> : null}
              </Link>
            ) : (
              <a href={link.href ?? "#"}>
                {link.label}
                {link.note ? <sup>{link.note}</sup> : null}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
