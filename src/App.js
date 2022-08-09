
import { useState } from 'react';
import './App.css';


function App() {

  const [txtLine1, setTxtLine1] = useState('');
  const [txtLine2, setTxtLine2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeTxtLine1 = function (event) {
    setTxtLine1(event.target.value)
  }

  const onChangeTxtLine2 = function (event) {
    setTxtLine2(event.target.value)
  }

  const onChangeImagen = function (event) {
    setImagen(event.target.value)
  }

  

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="fire">Fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeTxtLine1} type="text" placeholder="Top" /> <br />
      <input onChange={onChangeTxtLine2} type="text" placeholder="Bottom" /> <br />
      <button >Export</button>

      <div className="meme" id="meme">
        <span>{txtLine1}</span> <br />
        <span>{txtLine2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}


export default App;
