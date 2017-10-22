// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TopBar.css';

function shareApp() {
  navigator.share({
    title: 'DooEx',
    text: 'DooEx\nGoogle Doodles Explorer\n\n',
    url: 'https://10.42.0.1:3000/',
  });
}

function ShareButton() {
  if (navigator.share === undefined) {
    return null;
  }

  return (
    <button className={styles.action} onClick={shareApp}>
      <span className="fa fa-fw fa-share-alt" />
    </button>
  );
}

function TopBar() {
  return (
    <nav className={styles.root}>
      <Link className="navbar-brand" to="/">
        DooEx
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={styles.action} to="/search">
            <span className="fa fa-fw fa-search" />
          </Link>
        </li>

        <li className="nav-item">
          <Link className={styles.action} to="/saved">
            <span className="fa fa-fw fa-star" />
          </Link>
        </li>

        {/* last item */}
        <li className="nav-item">
          <ShareButton />
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
