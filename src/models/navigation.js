import searchIcon from "../assets/images/icons/search-icon-sm.png";
import cartIcon from "../assets/images/icons/cart-sm.png";

/**
 * @typedef {object} NavItem
 * @property {string} label Visible name. Also used as the image alt text.
 * @property {string} to Client route path.
 * @property {string} summary Short line shown on that route.
 * @property {string} [icon] Imported icon URL. Text is shown when this is absent.
 */

/** @type {NavItem[]} */
export const navigationItems = [
  { label: "Mac", to: "/mac", summary: "Mac computers, displays, and accessories." },
  { label: "iPhone", to: "/iphone", summary: "iPhone layout sample." },
  { label: "iPad", to: "/ipad", summary: "iPad models and accessories." },
  { label: "Watch", to: "/watch", summary: "Apple Watch bands and models." },
  { label: "TV", to: "/tv", summary: "Apple TV and the TV app." },
  { label: "Music", to: "/music", summary: "Apple Music and audio." },
  { label: "Support", to: "/support", summary: "A short sample page." },
  {
    label: "Search",
    to: "/search",
    summary: "Find a product and open its page.",
    icon: searchIcon,
  },
  {
    label: "Cart",
    to: "/cart",
    summary: "This demo has no checkout.",
    icon: cartIcon,
  },
];

/**
 * Route path for a label that matches primary navigation, if one exists.
 * @param {string} label
 * @returns {string | undefined}
 */
export function pathForLabel(label) {
  return navigationItems.find((item) => item.label === label)?.to;
}
