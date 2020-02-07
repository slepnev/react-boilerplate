import React from 'react';
import { Header, Logo, Menu } from './shared';
import { Global } from '@emotion/core';
import { globals, normalize } from './styles';
import { AppStyled, AsideStyled, ContainerStyled, HeaderStyled, LogoWrapperStyled, MainStyled } from './app.styled';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={normalize} />
      <Global styles={globals} />
      <AppStyled>
        <AsideStyled>
          <LogoWrapperStyled>
            <Logo />
          </LogoWrapperStyled>
          <Menu />
        </AsideStyled>
        <ContainerStyled>
          <HeaderStyled>
            <Header />
          </HeaderStyled>
          <MainStyled>
            <Routes />
          </MainStyled>
        </ContainerStyled>
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
