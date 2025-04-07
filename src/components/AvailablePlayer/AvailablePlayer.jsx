import Players from '../Players/Players';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './AvailablePlayer.css'

const AvailablePlayer = ({handleActiveBtn, active, handleSelectPlayers, selectPlayers, handleRemovePlayer}) => {
    return (
        <div>
            <div className="available-player">
                <h2>{active? `Available Player` : `Selected Player ${selectPlayers.length} / 6`}</h2>
                {/* <h2>Available Player</h2> */}
                <div>
                    <button onClick={()=> handleActiveBtn(true)} className={active ? `btn active` : `btn`}>Available</button>
                    <button onClick={()=> handleActiveBtn(false)} className={active ? `btn` : `btn active`}>Selected ({selectPlayers.length})</button>
                </div>
            </div>
            {
                (active) ? <Players handleSelectPlayers={handleSelectPlayers}></Players> : <SelectedPlayer selectPlayers={selectPlayers} handleActiveBtn={handleActiveBtn} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>
            }
            
            
        </div>
    );
};

export default AvailablePlayer;