import { Route, Routes } from "react-router-dom"
import { Suspense } from 'react'
import { RouteConfig } from "shared/config/routeConfig/config"
import { LoaderPage } from "widgets/LoaderPage"

const AppRouter = () => {
  return (
    <Suspense fallback={<LoaderPage/>}>
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
  )
}

export default AppRouter
