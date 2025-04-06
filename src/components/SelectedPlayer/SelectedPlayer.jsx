import React from 'react';

const SelectedPlayer = ({selectPlayers}) => {
    console.log(selectPlayers)
    return (
        <div>
            {
                selectPlayers.map((player) => <div>
                    <h2>{player.player_name}</h2>
                    <p>{player.player_role}</p>
                </div>)
            }
        </div>
    );
};

export default SelectedPlayer;