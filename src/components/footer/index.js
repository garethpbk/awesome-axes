import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Awesome Axes</p>
      </div>
    </footer>
  );
}

export default Footer;
