import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export function AppRouter() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path as string}
            path={path}
            element={(
              <Suspense fallback={<div>Загрузка...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
