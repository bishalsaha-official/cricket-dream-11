import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from "./components/Header/Header"

function App() {
  const [credits, setCredits] = useState(0)
  const handleCredits = ()=>{
    const newCredits = credits + 15000000;
    setCredits(newCredits)
  }

  return (
    <>
      <div className="container">
        <Header credits={credits}></Header>
        <Banner handleCredits={handleCredits}></Banner>
      </div>
    </>
  )
}

export default App
