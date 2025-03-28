import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './css/Header.css';

export default function Header() {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguageDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header>
      <div className="container-header">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          <img src="/gruas-perello.jpg" alt="Logo" className="logo" />
        </Link>

        <div className="language-dropdown">
          <button className="language-dropdown-btn" onClick={toggleLanguageDropdown}>
            {i18n.language.toUpperCase()}
            <span className="dropdown-arrow">{langDropdownOpen ? '▲' : '▼'}</span>
          </button>
          {langDropdownOpen && (
            <div className="language-dropdown-content">
              <button className="button-language" onClick={() => changeLanguage('es')}>ES</button>
              <button className="button-language" onClick={() => changeLanguage('en')}>EN</button>
              <button className="button-language" onClick={() => changeLanguage('de')}>DE</button>
            </div>
          )}
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <b>{t('header.home')}</b>
              </Link>
            </li>
            <li>
              <Link
                to="/la-empresa"
                className={location.pathname === '/la-empresa' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <b>{t('header.about')}</b>
              </Link>
            </li>
            <li>
              <Link
                to="/servicios"
                className={location.pathname === '/servicios' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <b>{t('header.services')}</b>
              </Link>
            </li>
            <li>
              <Link
                to="/tecnologia"
                className={location.pathname === '/tecnologia' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <b>{t('header.technology')}</b>
              </Link>
            </li>
            <li>
              <Link
                to="/cobertura"
                className={location.pathname === '/cobertura' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <b>{t('header.coverage')}</b>
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={location.pathname === '/contacto' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <b>{t('header.contact')}</b>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
