import { createContext,useContext } from "react";

export const TodoContext=createContext({
 todos:[
    {
        id:1,
        todo:'todo msg',
        checked:'false',//or you can write completed
    }
 ],//you can create array (inside obj)also
 addTodo:(todo)=>{},
 updatedTodo:(id,todo)=>{},//edit
 deleteTodo:(id)=>{},
 toggleComplete:(id)={}//checked then todo cut
 //id need for which one you want to change 
})

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}