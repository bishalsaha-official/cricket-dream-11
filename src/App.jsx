import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from "./components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer';
import Newslater from './Newslater/Newslater';

function App() {
  const [credits, setCredits] = useState(0)
  const [active, setActive] = useState(true)
  const [selectPlayers, setSelectplayers] = useState([])

  const handleCredits = () => {
    toast("Succesfully get Free Credited")
    const newCredits = credits + 15000000;
    setCredits(newCredits)
  }

  const handleActiveBtn = (status) => {
    if (status == true) {
      setActive(true)
    }
    else {
      setActive(false)
    }
  }

  const handleSelectPlayers = (select) => {
    const isExist = selectPlayers.find(p => p.id == select.id)
    if (isExist) {
      toast("Allready select this player")
    }
    else {
      const newPlayers = [...selectPlayers, select]
      setSelectplayers(newPlayers)
    }
  }

  const handleRemovePlayer = (id) =>{
    const remainPlayer = selectPlayers.filter(p => p.id != id)
    setSelectplayers(remainPlayer)
  }

  return (
    <>
      <div className="container">
        <ToastContainer></ToastContainer>
        <Header credits={credits}></Header>
        <Banner handleCredits={handleCredits}></Banner>
        <AvailablePlayer
          handleActiveBtn={handleActiveBtn}
          active={active}
          handleSelectPlayers={handleSelectPlayers}
          selectPlayers={selectPlayers}
          handleRemovePlayer={handleRemovePlayer}
        ></AvailablePlayer>
        <Newslater></Newslater>
      </div>
    </>
  )
}

export default App
