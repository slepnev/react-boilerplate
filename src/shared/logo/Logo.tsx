import React from 'react';
import logo from '../../assets/logo.svg';
import { LogoSvg } from './logo.styled';

const Logo = () => {
  return (
    <LogoSvg src={logo} alt="Logo" />
  );
};

export default Logo;
