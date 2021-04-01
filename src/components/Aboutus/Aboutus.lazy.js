import React, { lazy, Suspense } from 'react';

const LazyAboutus = lazy(() => import('./Aboutus'));

const Aboutus = props => (
  <Suspense fallback={null}>
    <LazyAboutus {...props} />
  </Suspense>
);

export default Aboutus;
