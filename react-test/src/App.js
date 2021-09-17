// convertir este archivo en un componente de clase
import React, { Component } from 'react'; // de toda la libreria de React solo traemos la parte de Component
import './App.css';
// se importa el componente
import CustomHeading from './components/customHeading';
import CustomList from './components/customList';


class App extends Component{
  constructor(){
    super()
    this.state = {
      title:"Hola",
      listItems:[]
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.saveHandler = this.saveHandler.bind(this)
  }
  // crear el handler
  changeHandler(event){
    const text = event.target.value
    this.setState({title:text})
  }
  
  saveHandler(){
    this.setState({listItems: [...this.state.listItems, this.state.title]})
  }

  render(){
    return(
      <>
       <input type="text" onChange={this.changeHandler}/>
       <button onClick={this.saveHandler}>Guardar</button>
       {/*<CustomHeading 
       text = {this.state.title ? this.state.title : "Hola con props"}
       customClasses = {["text-bold", "text-red"]}
       />*/}
       <ul>
         {/*{
           this.state.listItems.map((item,index)) => <li key={index}>{item}</li>)
           })
         }*/}
         <CustomList
         listItems = {this.state.listItems}
         />
       </ul>
      </>
    )
  }
}

export default App;
