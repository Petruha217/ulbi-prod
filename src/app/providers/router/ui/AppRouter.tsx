import { Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import { RouteConfig } from "shared/config/routeConfig/config";


const AppRouter = () => {
  return (
    <Suspense fallback={<h3>Loding...</h3>}>
        <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => {
          return <Route
            key={path}
            path={path}
            element={
              <div className="page-wrapper">
                {element}
              </div>
            }
          />
        })}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;