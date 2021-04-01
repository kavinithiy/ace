import React, { lazy, Suspense } from 'react';

const LazyDirectorProfile = lazy(() => import('./DirectorProfile'));

const DirectorProfile = props => (
  <Suspense fallback={null}>
    <LazyDirectorProfile {...props} />
  </Suspense>
);

export default DirectorProfile;
