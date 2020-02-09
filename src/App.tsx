import React from 'react';
import { Header, Logo, Menu } from './shared';
import { Global } from '@emotion/core';
import { globals, normalize } from './styles';
import { AppWrapper, Aside, Container, HeaderWrapper, LogoWrapper } from './app.styled';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={normalize} />
      <Global styles={globals} />
      <AppWrapper>
        <Aside>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Menu />
        </Aside>
        <Container>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <main>
            <Routes />
          </main>
        </Container>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
