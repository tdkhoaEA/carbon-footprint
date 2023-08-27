import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarbonView from './pages/Carbon';
import Home from './pages/Home';

const AppRoutes = () => {
    return (
    <Routes>
        <Route
            path='/carbon'
            element={
                <CarbonView />
            }
        />
        <Route
            path='/'
            element={
                <Home />
            }
        />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
);
};

export default AppRoutes;

// TODO: Add e2e tests for private routes and unauthenticated routes
