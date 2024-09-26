import './App.css';
import Button from './Button';

function Buttons() {
  return (
    <div>
      <div>
        <h1 className='header'>What item would you like to loan</h1>
      </div>
      <div className='buttons'>
        <Button text={"Keyboard"} icon={"keyboard.jpg"} lockerId={'1'}></Button>
        <Button text={"Mouse"} icon={"mouse.png"} lockerId={'2'}></Button>
        <Button text={"Headset"} icon={"headset.png"} lockerId={'3'}></Button>
      </div>
    </div>
  );
}

export default Buttons;
