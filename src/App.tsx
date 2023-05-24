import React, { useState } from 'react'
import './index.css'
import Development from './components/Development/Development';
import Photography from './components/photography/photography';
import { AnimatePresence, motion } from "framer-motion";
import {Route, useRoutes, useLocation } from "react-router-dom";
import ErrorPage from './components/ErrorPage';


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Development />,
    }, 
    {
      path: "/photo",
      element: <Photography />
    },
    {
      path: "/*",
      element: <ErrorPage />
    }
  ])

  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  )
}

export default App
