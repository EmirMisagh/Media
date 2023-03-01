import React, { Suspense, lazy, useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notif from './components/Notif';
import FuncyLoding from './components/tools/FuncyLoding';
import { routesnavbar, routes, routesfooter, routesnavbarFootball } from './components/tools/Router';


function App() {
  return (
    <Router>
      <Suspense fallback={<FuncyLoding />} >
        <div className='container-fluid p-0'>
          <div className='p-0'>
            <Routes>
              {routesnavbar.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={route.element}
                  />
                )
              })}
            </Routes>
            <Routes>
              {routesnavbarFootball.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={route.element}
                  />
                )
              })}
            </Routes>
          </div>
          <div className=' p-0' id='mainkol'>
            <Routes>
              {routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={route.element}
                  />
                )
              })}
            </Routes>
          </div>
          <div>
            <Routes>
              {routesfooter.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    element={route.element}
                  />
                )
              })}
            </Routes>
          </div>
          <Notif />
          <div className='aler' >
            <p id='aler'></p>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
