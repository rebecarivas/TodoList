import React from 'react'

function List(props){
   
    return(
        <ul>
            {props.items.map((item, index) => <li key={index}> {item.text} <button onClick={() => {props.onItemDeleted(item)}}> DEL </button></li>)}
        </ul> 
    )
}

export default List 