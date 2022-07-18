import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright">
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      Supersite, Powered by News API
    </p>

    <ul className="footer__list footer__list_type_links">
      <li>
        <Link to="/" className="footer__link">
          Home
        </Link>
      </li>

      <li>
        <a
          href="https://practicum.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Practicum by Yandex
        </a>
      </li>
    </ul>

    <ul className="footer__list footer__list_type_icons">
      <li>
        <a
          title="GitHub profile"
          href="https://github.com/Pavel-Lantsman"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub icon" className="footer__icon" />
        </a>
      </li>

      <li>
        <a
          title="Facebook profile"
          href="https://www.facebook.com/profile.php"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Facebook icon" className="footer__icon" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
