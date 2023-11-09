import React, { Suspense } from 'react';

const AboutPageAsync = React.lazy(() => import('./AboutPage'));
export default AboutPageAsync;