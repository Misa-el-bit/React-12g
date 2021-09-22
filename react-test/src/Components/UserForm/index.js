import React from 'react';
import { 
  Form, 
  FormGroup, 
  Label,  
  Button
} from "reactstrap"
import UserInput from '../UserInput';

function UserForm(props) {
    const { changeHandler, saveHandler, userData } = props
    return (
        <Form className="bg-dark text-white p-3 border rounded">
              <FormGroup>
                 <Label>Nombre</Label>
                 <UserInput
                    name= "nombre"
                    handler= {changeHandler}
                    value= {userData.nombre}
                 />
               </FormGroup>
               <FormGroup>
                 <Label>Email</Label>
                 <UserInput
                    name= "email"
                    handler= {changeHandler}
                    value= {userData.email}
                 />
               </FormGroup>
               <Button 
                type="button" 
                className="mt-3"
                color="primary" 
                onClick={saveHandler}
               >Guardar</Button>
        </Form>
    );
}

export default UserForm;