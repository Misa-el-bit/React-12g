import React from 'react';
import {Table} from "reactstrap"

function UsersTable(props) {
    const {usersList} = props
    return (
        <Table dark>
            <thead>
              <tr>  
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                usersList.map( (user,index) =>{ //mapear para iterar y renderizar cuantas filas se requieran 
                    const { nombre, email } = user
                    return (
                        <tr key={index}>
                        <td>{nombre}</td>
                        <td>{email}</td>
                        </tr>
                    )
                })
              }
            </tbody>
        </Table>
    );
}

export default UsersTable;