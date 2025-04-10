import React from 'react';
import './SelectedPlayer.css'
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectPlayers, handleActiveBtn, handleRemovePlayer }) => {
    return (
        <div>
            {
                selectPlayers.map((player, idx) => <div key={idx} className='select-player-container'>
                    <div className='select-player-item'>
                        <img src={player.cover_image} alt="" />
                        <div>
                            <h2>{player.player_name}</h2>
                            <p>{player.player_role}</p>
                        </div>
                    </div>
                    <button onClick={()=> handleRemovePlayer(player.id, player.price)} className='remove-btn btn'><MdDelete></MdDelete></button>
                </div>)
            }
            <button onClick={()=> handleActiveBtn(true)} className='btn add-more-btn'>Add more</button>
        </div>
    );
};

export default SelectedPlayer;