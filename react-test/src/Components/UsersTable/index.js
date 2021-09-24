import React, {useState} from 'react';
import { Table } from 'reactstrap';

const UsersTable = props => { 
    const [isShown, setIsShown] = useState (true)
    const {usersList} = props
    const toggle = () =>{
        setIsShown(! isShown)
    }
    return (
        <>
        <button type ="button" onClick={toggle}>{isShown ? "Ocultar" : "Mostrar"}</button>
        {
        isShown && 
        <Table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                usersList.map((user, index)=>{
                    const {nombre, email} = user
                    return(
                        <tr>
                            <td>{nombre}</td>
                            <td>{email}</td>
                        </tr>
                    )
                }) 
            }
            </tbody>
        </Table>
        }
        </> 
    );
}

export default UsersTable;