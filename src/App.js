import './App.css';
import PreloadLink from './preLoadRoute';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutRoute, ContactRoute, HomeRoute, routes } from './mainRoutes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div className="navbar navbar-expand-lg navbar-dark bg-dark">
              <PreloadLink className="navbar-brand" to={HomeRoute}>
                Home
              </PreloadLink>
              <PreloadLink className="navbar-brand" to={AboutRoute}>
                About
              </PreloadLink>
              <PreloadLink className="navbar-brand" to={ContactRoute}>
                Contact
              </PreloadLink>
          </div>
        </header>
      </div>

      <Suspense fallback={<div class="spinner-border" role="status"></div>}>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  Component={route.component}
                />
              );
            })}
            <Route path='*' element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
