import React from 'react';
import Spinner from '../../shared/spinner/Spinner';


const LoginBundle = React.lazy(() => import(
  /* webpackChunkName: 'login' */
  /* webpackPrefetch: 10 */
  './Login'
));

const LoginModule = () => (
  <React.Suspense fallback={<Spinner/>}>
    <LoginBundle />
  </React.Suspense>
);

export default LoginModule;
