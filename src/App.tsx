import React, { Fragment } from 'react';
import { Header, Logo, Menu } from './shared/components';
import LoginModule from './modules/login';
import { Global } from '@emotion/core';
import { globals, normalize } from './styles';
import AppStyled from './app.style';

const App = () => {
  return (
    <Fragment>
      <Global styles={normalize}/>
      <Global styles={globals}/>
      <AppStyled>
        <header className="app__header">
          <Logo />
          <Header />
        </header>
        <div className="app__container">
          <Menu />
          <main>
            <LoginModule />
          </main>
        </div>
      </AppStyled>
    </Fragment>
  );
};

export default App;
