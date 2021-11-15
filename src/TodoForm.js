import React, { useState } from 'react'

function TodoForm(props){
    const [text, setText] = useState("")

    function addItem(event){
        event.preventDefault();
        if (text){
            props.onAddItem([text])
            setText("")}
        }

   return (<form> 
            <input onChange={(event)=> setText(event.target.value)} type="text" value= {text}></input>
            <button onClick={addItem}>Add</button>
        </form>)
}

export default TodoForm