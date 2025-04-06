import React from 'react';
import './Player.css'
import { FaUser, FaFlag } from "react-icons/fa";


const Player = ({player, handleSelectPlayers}) => {
    const {id, player_name, player_role, country, price, cover_image} = player;
    return (
        <div className='player-container'>
            <img src={cover_image} alt="" />
            <h2 className='player-name'><FaUser></FaUser> {player_name}</h2>
            <p><FaFlag></FaFlag> {country}</p>
            <p>Role: {player_role}</p>
            <p>Price: {price}</p>
            <button onClick={()=> {handleSelectPlayers(player)}} className='btn'>Choose Player</button>
        </div>
    );
};

export default Player;