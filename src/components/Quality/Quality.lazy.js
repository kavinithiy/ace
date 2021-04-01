import React, { lazy, Suspense } from 'react';

const LazyQuality = lazy(() => import('./Quality'));

const Quality = props => (
  <Suspense fallback={null}>
    <LazyQuality {...props} />
  </Suspense>
);

export default Quality;
