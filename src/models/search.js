/**
 * @typedef {object} SearchEntry
 * @property {string} title
 * @property {string} detail
 * @property {string} to Route that opens this product's photo and copy.
 * @property {string[]} terms Extra words that should match this product.
 */

/** @type {SearchEntry[]} */
export const searchEntries = [
  {
    title: "MacBook Air",
    detail: "Twice the speed. Twice the storage.",
    to: "/mac",
    terms: ["mac", "macbook", "air"],
  },
  {
    title: "iPhone 11 Pro",
    detail: "Pro cameras. Pro display. Pro performance.",
    to: "/iphone",
    terms: ["iphone", "11", "pro"],
  },
  {
    title: "iPhone 11",
    detail: "Just the right amount of everything.",
    to: "/iphone",
    terms: ["iphone", "11"],
  },
  {
    title: "iPad Pro",
    detail: "iPad Pro available starting 3.25",
    to: "/ipad",
    terms: ["ipad", "pro"],
  },
  {
    title: "Apple Watch",
    detail: "With the Always-On Retina display.",
    to: "/watch",
    terms: ["watch", "series"],
  },
  {
    title: "Apple TV",
    detail: "Sample show art on the TV panel.",
    to: "/tv",
    terms: ["tv", "apple tv"],
  },
  {
    title: "Music",
    detail: "Apple Music and audio.",
    to: "/music",
    terms: ["music", "audio"],
  },
  {
    title: "Support",
    detail: "A short sample page.",
    to: "/support",
    terms: ["support", "help", "repair"],
  },
];

/**
 * Products whose title, detail, or terms contain the query.
 * @param {string} query
 * @returns {SearchEntry[]}
 */
export function searchProducts(query) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];

  return searchEntries.filter((entry) => {
    const haystack = [entry.title, entry.detail, ...entry.terms]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}
