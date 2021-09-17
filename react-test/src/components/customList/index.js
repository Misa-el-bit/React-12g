// componente funcional custom list
import React from "react"

function someContent(){
    return(
        <>
        <h1>Algún texto</h1>
        <p>Lorem imsum dolor sit amet, Lorem imsum dolor sit amet,
        Lorem imsum dolor sit amet</p>
        </>
    )
}

function CustomList(props){
    return(
        <ul>
            {
                someContent()
            }
            {/*{
           props.listItems.map((item, index)=> 
             <li key= {index  }>{item}</li>)
            }*/}
        </ul>
    )
}

export default CustomList