import React, {useState, useEffect}from 'react';
import { Form,FormGroup, Input, Label, Button } from 'reactstrap';
import UsersTable from "./Components/UsersTable"


/*
Esto es lo que regresa useState, un array de 2 posiciones
[
  nombreDel State,
  funcion que modifica el valor de este estado
]
[
  stateName,
  (value) => {stateName = value}
]

*/

const App = () => {
  const [title, setTitle] = useState("hola desde hooks")  //useState recibe como argumento un valor inicial que es el valor inicial del estado 
  const [users, setUsers] = useState([])
  const [userData, setUserData] = useState({})
  /*
  const title = "hola "
  const setTitle = (value) => {title = value}
  */
  const changeHandler = event =>{
    const value = event.target.value
    console.log(value)
    setTitle(value)
  }
  const userHandler = event =>{
    const property = event.target.name
    const value = event.target.value
    setUserData({... userData, [property]: value})
    console.log(userData)
  }
  /*
  useEffect(()=>{
    console.log("el componente se cargó con éxito")
  },[]) // Array de dependencias para que el efecto solo se sispare una sola vez, cuando el componente se carge
  */
 const saveUser = () =>{
   setUsers([...users, userData])
 }
  return(
    <>
    <Form>
      <FormGroup>
        <Label>Escribe algun texto</Label>
        <Input name="nombre"onChange={userHandler}/> {/*esto cacha el valor ingresado con ayuda del handler */}
      </FormGroup>
      <FormGroup>
        <Label>Escribe algun texto</Label>
        <Input name="email"onChange={userHandler}/> {/*esto cacha el valor ingresado con ayuda del handler */}
      </FormGroup>
      <Button type="button" onClick={saveUser}>Save</Button>
    </Form>
    <h1>{title}</h1>
    <UsersTable usersList = {users}/>
    </>
  )
};

export default App;