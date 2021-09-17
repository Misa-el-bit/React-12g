// convertir este archivo en un componente de clase
import React, { Component } from 'react'; // de toda la libreria de React solo traemos la parte de Component
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = { // se agrega estado 
      etapa: ""
    }
    this.setEtapa = this.setEtapa.bind(this) // asociar el handler al constructor
  }
  // crear el handler
  setEtapa( event ){
    const value = event.target.value
    console.log(value)
    this.setState({ etapa: value})
  }
  render(){
    const{ etapa } = this.state
    return(
      /*
      <div className="App">
      <h1>{6 > 5 ? "hola koders!": "adios"}</h1>
      <ul>
      {
        ["uno", "dos","tres","cuatro"].map (item => <li>{item}</li>)
      }
      </ul>
      </div>
      */
      <>
        <input className= "control" type="radio" name="etapa" value="siga" onClick={this.setEtapa}/>
        <label for= "">Siga</label>
        <input className= "control" type="radio" name="etapa" value="precaución" onClick={this.setEtapa}/>
        <label for= "">Precaución</label>
        <input className= "control" type="radio" name="etapa" value="alto" onClick={this.setEtapa}/>
        <label for= "">Alto</label>
        <div className= "semaforo">
          <div className= {`luz ${etapa}`}></div>
        </div>
      </>
    )
  }
}

export default App;
