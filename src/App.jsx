import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from "./components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer';

function App() {
  const [credits, setCredits] = useState(0)
  const [active, setActive] = useState(true)

  const handleCredits = ()=>{
    toast("Succesfully get Free Credited")
    const newCredits = credits + 15000000;
    setCredits(newCredits)
  }

  const handleActiveBtn = (status) =>{
    if(status == true){
      setActive(true)
      console.log("true")
    }
    else{
      setActive(false)
      console.log('false')
    }
  }

  return (
    <>
      <div className="container">
        <ToastContainer></ToastContainer>
        <Header credits={credits}></Header>
        <Banner handleCredits={handleCredits}></Banner>
        <AvailablePlayer handleActiveBtn={handleActiveBtn} active={active}></AvailablePlayer>
      </div>
    </>
  )
}

export default App
