import React from 'react';
import styles from './Header.module.css';

import logoSm from '../../assets/images/icons/logo-sm.png'; 
import search from '../../assets/images/icons/search-icon-sm.png';
import cart from '../../assets/images/icons/cart-sm.png';

export default function Header() {
  return (
    <div className={`${styles.navWrapper} fixed-top`}>
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={logoSm} alt="Apple Logo" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">iPhone</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">iPad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">TV</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Music</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={search} alt="Search" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cart} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}