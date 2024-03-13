import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, adding,editTodo,deleteTodo,updateTodo,changeColor } from '../Slice'

function Todo() {
    const {todo,todos,color} = useSelector((store) => store.todo)
    const dispatch = useDispatch()
    const edit = useRef()
    

    const addTodo = (e)=>{
            dispatch(adding(e.target.value))
    }

    const addItem = (e) =>{
        e.preventDefault()
        if (todos.length>0){
            dispatch(add(todos))
            dispatch(adding(""))
        }else{
            alert('enter somthing')
        }
        
    }

    const update = (id) =>{
        if(edit.current.value.length > 0) {
            dispatch(updateTodo({id:id, task:edit.current.value}))
        }
    }
    
  return (
    <div>
        <div>
            <h1>TODO APPLICATION</h1>
            <form onSubmit={addItem}>

            <input type='text' value={todos}  onChange={addTodo} placeholder='Add items' /> 
            <button type='submit'>Add</button>
            </form>
            <button style={{backgroundColor:color}} onClick={()=>dispatch(changeColor())}>Color</button>
            {todo.map((x)=>(
                <div>
                    {x.edit ?
                    <>
                    <input type='text' defaultValue={x.task} ref={edit} />
                    <button onClick={()=>update(x.id)}>save</button>
                    
                    </>
                    :
                    <>
                    
                    <h3>{x.task}</h3>
                    <div>
                        <button onClick={()=>dispatch(editTodo(x.id))}>Edit</button>
                        <button onClick={()=>dispatch(deleteTodo(x.id))}>Delete</button>
                    </div>
                    
                    </>
                    }
                <h1 key={x.id}>
                    
                </h1>
                
                </div>
            ))}
                
        </div>
    </div>
  )
}

export default Todo