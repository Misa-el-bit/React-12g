// convertir este archivo en un componente de clase
import React, { Component } from 'react'; // de toda la libreria de React solo traemos la parte de Component
import './App.scss';
// se importa el componente
import { 
  Container, 
  Row, 
  Col, 
  } from 'reactstrap';
import UsersTable from './Components/UsersTable';
import UserForm from './Components/UserForm';


class App extends Component{
  constructor(){
    super()
    this.state = {
      usersList:[], //se crea una lista vacia 
      userData:{}
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.saveHandler = this.saveHandler.bind(this)
  }

  onChangeHandler(event){ // crear el handler que ocupe el evento 
    const property = event.target.name
    const value = event.target.value
    console.log(property + " : " + value)
    this.setState({userData:{...this.state.userData, [property]: value}})
  }

  saveHandler(){ // crear el handler para el boton guardar
    this.setState(
      {
        usersList: [...this.state.usersList,this.state.userData],
        userData: {nombre: "", email:""} // esto hace que el formulario se limpie al dar click en guardar
      })
  }
  render(){
    return(
      <>
       <Container fluid className="mt-3">
         <Row>
           <Col xs="12" md="3">
             <UserForm 
             changeHandler = {this.onChangeHandler}
             saveHandler = {this.saveHandler}
             userData = {this.state.userData}
             />
           </Col>
           <Col xs="12" md="9">
             {
                this.state.usersList.length !==0 && //conditional rendering, solo se muestra la tabla si hay usuarios guardados
                <UsersTable usersList ={ this.state.usersList}/> // se indica el componente a renderizar y se le pasan las props 
              }
           </Col>
         </Row>
       </Container>
      </>
    )
  }
}

export default App;
