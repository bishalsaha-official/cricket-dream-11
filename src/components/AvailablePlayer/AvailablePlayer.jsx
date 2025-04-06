import Players from '../Players/Players';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './AvailablePlayer.css'

const AvailablePlayer = ({handleActiveBtn, active}) => {
    return (
        <div>
            <div className="available-player">
                <h2>Available Player</h2>
                <div>
                    <button onClick={()=> handleActiveBtn(true)} className={active ? `btn active` : `btn`}>Available</button>
                    <button onClick={()=> handleActiveBtn(false)} className={active ? `btn` : `btn active`}>Selected </button>
                </div>
            </div>
            {
                (active) ? <Players></Players> : <SelectedPlayer></SelectedPlayer>
            }
            
            
        </div>
    );
};

export default AvailablePlayer;