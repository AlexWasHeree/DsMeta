import React from 'react';
import './styles.css';
import icon from '../../assets/header-dsmeta.svg';

const Header = () => {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={icon} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://github.com/AlexWasHeree"> @AlexWasHeree</a>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
