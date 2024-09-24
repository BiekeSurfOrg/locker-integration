import './App.css';
import { callLockedApi } from './apiCall';

function Button({ text, icon, api }) {

    return (
        <div>
            <button className='img-button' onClick={()=>callLockedApi(api)}>
                <img src={require(`./assets/${icon}`)} width={"300px"}></img>
               <span>{text}</span> 
            </button>
        </div>
    );
}
export default Button;
