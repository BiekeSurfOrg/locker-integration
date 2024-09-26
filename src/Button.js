import './App.css';
import { callLockedApi } from './lockerAPICall';

function Button({ text, icon, lockerId }) {

    return (
        <div>
            <button className='img-button' onClick={() => callLockedApi(lockerId)}>
                <img src={require(`./assets/${icon}`)} width={"300px"}></img>
                <span>{text}</span>
            </button>
        </div>
    );
}
export default Button;
