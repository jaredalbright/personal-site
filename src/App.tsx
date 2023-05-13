import { useState } from 'react'
import './index.css'
import Header from './components/Header'

function App() {
  const [showDev, setShowDev] = useState(true);

  return (
    <>
    <Header showDev={() => setShowDev(true)} showPhoto={() => setShowDev(false)} selected={showDev}/>
    </>
  )
}

export default App
