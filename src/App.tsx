import React, { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Development from './components/professional/development';
import Photography from './components/photography/photography';

function App() {
  const [showDev, setShowDev] = useState(true); 

  return (
    <>
    <Header showDev={() => setShowDev(true)} showPhoto={() => setShowDev(false)} selected={showDev}/>
    {showDev ? <Development/> : <Photography/>}
    </>
  )
}

export default App
