import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeModule from './modules/home';
import LoginModule from './modules/login';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomeModule} />
    <Route path="/login" component={LoginModule} />
    <Route path="*" component={() => <div>Not Found</div>} />
  </Switch>
);

export default Routes;
