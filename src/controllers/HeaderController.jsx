import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigationItems } from "../models/navigation.js";
import { searchProducts } from "../models/search.js";
import Header from "../views/layout/Header/Header.jsx";

/**
 * Owns header menu and search state and passes them to the header view.
 * @returns {import("react").JSX.Element}
 */
export default function HeaderController() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = searchProducts(query);

  /** Closes the mobile menu and the search field. */
  function closeMenu() {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setQuery("");
  }

  /** Opens or closes the mobile navigation. */
  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  /** Opens or closes the search field to the right of the icon. */
  function toggleSearch() {
    setIsSearchOpen((open) => !open);
    setQuery("");
  }

  /**
   * Opens the first matching product.
   * @param {import("react").FormEvent<HTMLFormElement>} event
   */
  function submitSearch(event) {
    event.preventDefault();
    if (!results[0]) return;
    navigate(results[0].to);
    closeMenu();
  }

  useEffect(() => {
    if (!isSearchOpen) return undefined;

    /**
     * Closes search when the pointer lands outside the search control.
     * @param {PointerEvent} event
     */
    function closeOnOutsidePointer(event) {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest("[data-search]")) {
        setIsSearchOpen(false);
        setQuery("");
      }
    }

    /**
     * Closes search when Escape is pressed.
     * @param {KeyboardEvent} event
     */
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isSearchOpen]);

  return (
    <Header
      items={navigationItems}
      isMenuOpen={isMenuOpen}
      isSearchOpen={isSearchOpen}
      query={query}
      results={results}
      onToggleMenu={toggleMenu}
      onToggleSearch={toggleSearch}
      onQueryChange={setQuery}
      onSubmitSearch={submitSearch}
      onNavigate={closeMenu}
    />
  );
}
