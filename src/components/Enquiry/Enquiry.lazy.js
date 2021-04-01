import React, { lazy, Suspense } from 'react';

const LazyEnquiry = lazy(() => import('./Enquiry'));

const Enquiry = props => (
  <Suspense fallback={null}>
    <LazyEnquiry {...props} />
  </Suspense>
);

export default Enquiry;
