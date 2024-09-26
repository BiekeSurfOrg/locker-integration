import './App.css';
import { callLockedApi } from './lockerAPICall';

function Button({ text, icon, lockerId }) {

    return (
        <div>
            <button className='img-button' onClick={() => callLockedApi(lockerId)}>
                <span className='description'>{text}</span>
                <img src={require(`./assets/${icon}`)} width={"300px"}></img>
            </button>
        </div>
    );
}
export default Button;
