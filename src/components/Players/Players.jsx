import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data =>  setPlayers(data))
    }, [])

    return (
        <div className="players-container">
            {
                players.map(player => <Player key={player.id} player={player}></Player>)
            }
        </div>
    );
};

export default Players;