import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logoSm from "../../../assets/images/icons/logo-sm.png";

/**
 * Fixed site header. Menu and search behavior are owned by HeaderController.
 * @param {object} props
 * @param {import("../../../models/navigation.js").NavItem[]} props.items
 * @param {boolean} props.isMenuOpen
 * @param {boolean} props.isSearchOpen
 * @param {string} props.query
 * @param {import("../../../models/search.js").SearchEntry[]} props.results
 * @param {() => void} props.onToggleMenu
 * @param {() => void} props.onToggleSearch
 * @param {(query: string) => void} props.onQueryChange
 * @param {(event: import("react").FormEvent<HTMLFormElement>) => void} props.onSubmitSearch
 * @param {() => void} props.onNavigate
 * @returns {import("react").JSX.Element}
 */
export default function Header({
  items,
  isMenuOpen,
  isSearchOpen,
  query,
  results,
  onToggleMenu,
  onToggleSearch,
  onQueryChange,
  onSubmitSearch,
  onNavigate,
}) {
  const searchInputRef = useRef(null);
  const trimmed = query.trim();

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  return (
    <header className={`${styles.navWrapper} fixed-top`}>
      <div className="container">
        <nav className="navbar navbar-expand-md" aria-label="Primary">
          <button
            className={`navbar-toggler ${styles.navbarToggler}`}
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={onToggleMenu}
          >
            ☰
          </button>
          <NavLink className="navbar-brand mx-auto" to="/" end onClick={onNavigate}>
            <img src={logoSm} alt="Apple" />
          </NavLink>

          <div
            id="primary-navigation"
            className={`navbar-collapse collapse${isMenuOpen ? " show" : ""}`}
          >
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {items.map((item) =>
                item.to === "/search" ? (
                  <li
                    className={`nav-item ${styles.navItem} ${styles.searchItem}${isSearchOpen ? ` ${styles.searchOpen}` : ""}`}
                    key={item.to}
                    data-search=""
                  >
                    <form className={styles.searchForm} role="search" onSubmit={onSubmitSearch}>
                      <button
                        className={styles.searchButton}
                        type="button"
                        aria-label={item.label}
                        aria-expanded={isSearchOpen}
                        aria-controls="site-search"
                        onClick={onToggleSearch}
                      >
                        <img src={item.icon} alt="" />
                      </button>
                      <input
                        ref={searchInputRef}
                        id="site-search"
                        className={styles.searchInput}
                        type="search"
                        name="q"
                        value={query}
                        placeholder="Search"
                        aria-label="Search"
                        tabIndex={isSearchOpen ? 0 : -1}
                        onChange={(event) => onQueryChange(event.target.value)}
                      />
                    </form>
                    {isSearchOpen && trimmed.length >= 2 && results.length === 0 ? (
                      <p className={styles.searchEmpty}>No results for “{trimmed}”.</p>
                    ) : null}
                    {isSearchOpen && results.length > 0 ? (
                      <ul className={styles.searchResults}>
                        {results.map((entry) => (
                          <li key={entry.title}>
                            <Link to={entry.to} onClick={onNavigate}>
                              <span>{entry.title}</span>
                              <small>{entry.detail}</small>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li className={`nav-item ${styles.navItem}`} key={item.to}>
                    <NavLink className="nav-link" to={item.to} onClick={onNavigate}>
                      {item.icon ? <img src={item.icon} alt={item.label} /> : item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
