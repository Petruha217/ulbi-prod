import React, { Suspense } from 'react';

const MainPageAsync = React.lazy(() => import('./MainPage'));
export default MainPageAsync;