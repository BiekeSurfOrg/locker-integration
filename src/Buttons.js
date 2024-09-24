import './App.css';
import Button from './Button';

function Buttons() {
  return (
    <div className='buttons'>
      <Button text={"Keyboard"} icon={"keyboard.jpg"} api={'keyboard'}></Button>
      <Button text={"Mouse"}  icon={"mouse.png"} api={'mouse'}></Button>
      <Button text={"Headset"}  icon={"headset.png"} api={'headset'}></Button>
    </div>
  );
}

export default Buttons;
