import React, { useState, useContext, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/imgs/logo.svg';
import dropdown from '../../assets/imgs/dropdown.svg';
import ServiceContext from '../../ServiceContext';

const Header = () => {
  const [organizationName, setOrganizationName] = useState('Organization Name');
  const service = useContext(ServiceContext);

  useEffect(() => {
    setOrganizationName(service.getOrganizationName());
  }, [setOrganizationName, service]);

  return (
    <header className="header">
      <img src={logo} alt="logo"/>

      <div className="header__more">
        <p className="organization-logo">{organizationName[0]}</p>

        <p className="organization-name">{organizationName}</p>

        <img src={dropdown} alt="dropdown"/>
      </div>
    </header>
  );
};

export default Header;
