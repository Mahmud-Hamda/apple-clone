import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../models/search.js";
import SearchPage from "../views/pages/SearchPage.jsx";

/**
 * Search field and matching product links.
 * @returns {import("react").JSX.Element}
 */
export default function SearchController() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const results = searchProducts(query);

  /**
   * Opens the first match when the form is submitted.
   * @param {import("react").FormEvent<HTMLFormElement>} event
   */
  function submitSearch(event) {
    event.preventDefault();
    if (results[0]) navigate(results[0].to);
  }

  return (
    <SearchPage
      query={query}
      results={results}
      onQueryChange={setQuery}
      onSubmit={submitSearch}
    />
  );
}
