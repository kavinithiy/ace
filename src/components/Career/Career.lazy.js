import React, { lazy, Suspense } from 'react';

const LazyCareer = lazy(() => import('./Career'));

const Career = props => (
  <Suspense fallback={null}>
    <LazyCareer {...props} />
  </Suspense>
);

export default Career;
