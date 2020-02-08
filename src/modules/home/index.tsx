import React from 'react';
import Spinner from '../../shared/spinner/Spinner';


const HomeBundle = React.lazy(() => import(
  /* webpackChunkName: 'login' */
  /* webpackPrefetch: 10 */
  './Home'
));

const HomeModule = () => (
  <React.Suspense fallback={<Spinner/>}>
    <HomeBundle />
  </React.Suspense>
);

export default HomeModule;
