import styles from "./SectionPage.module.css";
import { Link } from "react-router-dom";

/**
 * Standalone page for a primary navigation route.
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.summary
 * @returns {import("react").JSX.Element}
 */
export default function SectionPage({ title, summary }) {
  return (
    <main className={styles.page}>
      <h1>{title}</h1>
      <p>{summary}</p>
      <Link className={styles.back} to="/">
        <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M10.25 3.25 5.5 8l4.75 4.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to the homepage
      </Link>
    </main>
  );
}
