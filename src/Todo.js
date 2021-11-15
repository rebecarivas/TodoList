import React, { useState } from 'react'
import './Todo.css'
import List from './List'
import TodoForm from './TodoForm'
import Item from './item'



function Todo(){

    const [items, setItems] = useState([])

    function onAddItem(text){//agora em vez de item vai ser text
        let it = new Item(text) //esse Item é o que eu to importando
        setItems([...items, it])

    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)

    }

    return (<div className="container">
                <h1>To do list</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List onItemDeleted={onItemDeleted} items={items}></List>
        </div>)
    }

    export default Todo