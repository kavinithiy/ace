import React, { lazy, Suspense } from 'react';

const LazyWhyUs = lazy(() => import('./WhyUs'));

const WhyUs = props => (
  <Suspense fallback={null}>
    <LazyWhyUs {...props} />
  </Suspense>
);

export default WhyUs;
