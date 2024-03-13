import { createSlice } from "@reduxjs/toolkit";




 const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todo:[],
        todos:"",
        color:"red"
    },
    reducers:{
        add : (state,action) =>{
            state.todo.push({id:state.todo.length+1, task:action.payload, edit:false})
        },
        adding:(state,action)=>{
            state.todos = action.payload
        },
        editTodo : (state,action) =>{
            const edit = state.todo.find((x)=>x.id==action.payload)
            if(edit){
                edit.edit = true
            }
        },
        deleteTodo : (state,action) =>{
            const remove = action.payload
            state.todo = state.todo.filter((x)=> x.id !== remove)
        },
        updateTodo : (state,action) =>{
            const {id,task} =action.payload
            const todoupdate = state.todo.find((x)=>x.id === id)
            if(todoupdate) {
                todoupdate.task = task
                todoupdate.edit = false
            }
        },
        changeColor : (state,action) => {
            state.color = "green"
        }
        
    }
})







export const {add,adding,editTodo,deleteTodo,updateTodo,changeColor} = todoSlice.actions;
export const todoslice = todoSlice.reducer








