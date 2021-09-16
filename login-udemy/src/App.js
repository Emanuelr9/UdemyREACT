import logo from './logo.svg';
import './App.css';
//Importar para usar un estado hook
import {useState} from "react";

//Se necesita darle un evento al input con onChange.
//Las const se puden hacer de esas dos formas
function App() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

const handleEmailCambio = (event)=>{

    setEmail(event.target.value);
}
const handlePasswordCambio = ({target:{value}})=>{

  setPassword(value);
}

const handleForSubmit=(event)=>{

console.log("submit");

event.preventDefault();

alert(`Usuario: ${email}, Password: ${password}`)  ;

}


  return (
    <div className="App">
      <form onSubmit={handleForSubmit}>
        <h2> Inciar Sesion </h2>
        <label>
          Correo
          <input type='email' value={email} onChange={handleEmailCambio}/> 
        </label>
        <label>
          Contraseña
          <input type='password' password={password} onChange={handlePasswordCambio}/>
        </label>
        <button type="submit">
          Enter
        </button>

      </form>
    </div>
  );
}

export default App;


//onSubmit es otro evento

// para que un boton funcione con su submit el tipo de button tiene que ser submit

//event.preventDefault(); es una funcion que hay que llamar para evitar que se actualice la pagina completa.