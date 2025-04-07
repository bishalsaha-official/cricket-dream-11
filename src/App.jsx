import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from "./components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer';
import Newslater from './components/Newslater/Newslater';
import Footer from './components/Footer/Footer';

function App() {
  const [credits, setCredits] = useState(0)
  const [active, setActive] = useState(true)
  const [selectPlayers, setSelectplayers] = useState([])

  const handleCredits = () => {
    toast("Succesfully get Free Credited")
    const newCredits = credits + 1500000;
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
      toast("Allready selected This Player")
    }
    else {
      if (selectPlayers.length < 6) {
        const newPlayers = [...selectPlayers, select]
        setSelectplayers(newPlayers)

        if (credits >= select.price) {
          const newBalance = credits - select.price;
          setCredits(newBalance)
        }
        else {
          toast("Not Enough Balance")
        }
      }
      else {
        toast("Six Player Allready Added")
      }
    }
  }

  const handleRemovePlayer = (id, price) => {
    const remainPlayer = selectPlayers.filter(p => p.id != id)
    setSelectplayers(remainPlayer)
    toast("Successfully Removed Player")
    const newRemainBalance = credits + price;
    setCredits(newRemainBalance)
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
      <Footer></Footer>
    </>
  )
}

export default App
