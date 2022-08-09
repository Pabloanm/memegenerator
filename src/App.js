import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //linea1 = variable
  //setLinea1 = setter function
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = function(evento){
    //debugger;
    //alert(evento.target.value)
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    //debugger;
    //alert(evento.target.value)
    setLinea2(evento.target.value);
  }  

  const onChangeImage = function(evento){
    setImage(evento.target.value);
  } 


  return (
    <div className="App">
      <select onChange={onChangeImage} name="" id="">
        <option value="fire">House on fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input onChange={onChangeLinea1} type="text" name="" id="" placeholder="Top text" />
      <br />
      <input onChange={onChangeLinea2} type="text" name="" id="" placeholder="Bottom text" />
      <br />

      <div>
        <span>{linea1}</span> <br />
        <span>{linea2}</span> <br />
        <img src={"/img/" + image + ".jpg"} />
      </div>    
    </div>
  );
}

export default App;
