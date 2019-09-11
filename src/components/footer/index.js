import React from 'react';
import './styles.scss';

// import icon
import { ReactComponent as GithubIcon } from '../../assets/images/svg/github-icon.svg';

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Awesome Axes</p>
        <a href="https://github.com/garethpbk/awesome-axes" rel="noopener noreferrer" target="_blank">
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
