"use client";

import { SectionContext } from '@/context/SectionContext';
import Button from '../general/Button';
import { useContext, useState, useEffect, useRef } from 'react';
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'es', label: 'Español', countryCode: 'ES' },
  { code: 'en', label: 'Inglés', countryCode: 'US' },
  { code: 'fr', label: 'Francés', countryCode: 'FR' },
  { code: 'de', label: 'Alemán', countryCode: 'DE' },
  { code: 'ru', label: 'Ruso', countryCode: 'RU' }
];

function Header() {
  const { setLoginOpen, setSignUpOpen } = useContext(SectionContext);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(languages[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleOpenSignup = () => {
    setSignUpOpen(true);
    setMobileMenuOpen(false);
  };
  const handleOpenLogin = () => {
    setLoginOpen(true);
    setMobileMenuOpen(false);
  };

  const handleLanguageSelect = lang => {
    i18n.changeLanguage(lang.code);
    setLanguage(lang);
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-fgray-200 w-screen px-8 py-4 fixed header-shadow flex flex-row items-center justify-between md:px-16 lg:py-3 z-30">
      <div className="flex items-center gap-2">
        <img src="/logo/logo_talkie.png" alt="Logo fractal" className="h-6 md:h-8" />
        <p className="text-xl lg:text-2xl mb-1 font-semibold">Talkie</p>
      </div>

      {/* Menú para pantallas medianas y mayores */}
      <div className="hidden md:flex md:flex-row md:gap-8 items-center">
        <Button text="Iniciar sesión" type="secondary" func={handleOpenLogin} />
        <Button text="Registrarme" type="primary" func={handleOpenSignup} />
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none hover:bg-gray-50 transition-colors duration-200"
          >
            <ReactCountryFlag 
              countryCode={language.countryCode}
              svg
              style={{ width: '1.5em', height: '1.5em' }}
              title={language.label}
            />
            <span>{language.label}</span>
          </button>
          {showDropdown && (
            <ul className="absolute right-0 mt-2 min-w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {languages.map(lang => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleLanguageSelect(lang)}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <ReactCountryFlag 
                      countryCode={lang.countryCode}
                      svg
                      style={{ width: '1.5em', height: '1.5em' }}
                      title={lang.label}
                    />
                    <span>{lang.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Botón hamburguesa para pantallas pequeñas */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded focus:outline-none hover:bg-gray-50 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden z-20">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Button text="Iniciar sesión" type="secondary" func={handleOpenLogin} />
            <Button text="Registrarme" type="primary" func={handleOpenSignup} />
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none hover:bg-gray-50 transition-colors duration-200"
              >
                <ReactCountryFlag 
                  countryCode={language.countryCode}
                  svg
                  style={{ width: '1.5em', height: '1.5em' }}
                  title={language.label}
                />
                <span>{language.label}</span>
              </button>
              {showDropdown && (
                <ul className="mt-2 min-w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg">
                  {languages.map(lang => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageSelect(lang)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <ReactCountryFlag 
                          countryCode={lang.countryCode}
                          svg
                          style={{ width: '1.5em', height: '1.5em' }}
                          title={lang.label}
                        />
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;