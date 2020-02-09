import React from 'react';
import './Header.css';
import logo from '../../assets/imgs/logo.svg';
import dropdown from '../../assets/imgs/dropdown.svg';

const Header = () => (
  <header className="header">
    <img src={logo} alt="logo"/>

    <div className="header__more">
      <p className="organization-logo">S</p>

      <p className="organization-name">Organization Name</p>

      <img src={dropdown} alt="dropdown"/>
    </div>
  </header>
);

export default Header;
