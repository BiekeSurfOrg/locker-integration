import './App.css';
import Button from './Button';

function Buttons() {
  return (
    <div className='buttons'>
      <Button text={"Keyboard"} icon={"keyboard.jpg"} api={'1'}></Button>
      <Button text={"Mouse"}  icon={"mouse.png"} api={'2'}></Button>
      <Button text={"Headset"}  icon={"headset.png"} api={'3'}></Button>
    </div>
  );
}

export default Buttons;
