import { Link } from "react-router-dom";
import styles from "./SearchPage.module.css";

/**
 * Search field and the products that match the current query.
 * @param {object} props
 * @param {string} props.query
 * @param {import("../../models/search.js").SearchEntry[]} props.results
 * @param {(query: string) => void} props.onQueryChange
 * @param {(event: import("react").FormEvent<HTMLFormElement>) => void} props.onSubmit
 * @returns {import("react").JSX.Element}
 */
export default function SearchPage({ query, results, onQueryChange, onSubmit }) {
  const trimmed = query.trim();

  return (
    <main className={styles.page}>
      <form className={styles.form} role="search" onSubmit={onSubmit}>
        <label className={styles.field}>
          <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M15.2 15.2 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            name="q"
            value={query}
            placeholder="Search"
            aria-label="Search"
            autoFocus
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
      </form>

      {trimmed.length >= 2 && results.length === 0 ? (
        <p className={styles.empty}>No results for “{trimmed}”.</p>
      ) : null}

      {results.length > 0 ? (
        <ul className={styles.results}>
          {results.map((item) => (
            <li key={item.title}>
              <Link to={item.to}>
                <span>{item.title}</span>
                <small>{item.detail}</small>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
