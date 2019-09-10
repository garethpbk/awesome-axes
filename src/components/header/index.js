import React from 'react';
import { Link } from '@reach/router';
import './styles.scss';

function Header({ headerHeight }) {
  return (
    <header className={`header-wrapper ${headerHeight}`}>
      <div className="container header-content">
        <Link to="/">
          <h1>Awesome Axes</h1>
        </Link>
        <p>The #1 resource for finding your next sick shredder to make heads explode and achieve rock god status</p>
      </div>
    </header>
  );
}

export default Header;
