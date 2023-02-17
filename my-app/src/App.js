import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [ disaled, setDisabled ] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const disableButtonColor = disaled? 'gray' : buttonColor;
  return (
    <div>
      <button
        style={{backgroundColor: disableButtonColor}}
        disabled={disaled}ˇ
        onClick={()=> setButtonColor(newButtonColor)}>
          Change to {replaceCamelWithSpaces(newButtonColor)}     
      </button>
      <input 
        type="checkbox" 
        id="disable-button-checkbox"
        defaultChecked={disaled}
        onChange={(e)=>{setDisabled(e.target.checked)}} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
};


export default App;