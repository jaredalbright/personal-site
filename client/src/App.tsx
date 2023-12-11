import React, { useState } from 'react'
import './index.css'
import Development from './components/Development/Development';
import Photography from './components/photography/photography';
import { AnimatePresence, motion } from "framer-motion";
import {Route, useRoutes, useLocation } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import About from './components/Development/About';
import Work from './components/Development/Work';
import Skills from './components/Development/Skills';
import Projects from './components/Development/Projects';
import Contact from './components/Development/Contact';


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Development />,
      children: [
        {
          path: "/",
          element: <About />
        },
        {
          path: "work",
          element: <Work />
        },
        {
          path: "skills",
          element: <Skills />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "contact",
          element: <Contact />
        },
      ]
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
