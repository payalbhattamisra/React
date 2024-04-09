import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'

function App() {
 const [todos,setTodos]=useState([])

 const addTodo=(todo)=>{
  //setTodos(todo);then all value deleted and only one add but we want prev todo also
  //setTodos((prev)=>[todo,...prev]) here we are not declared todo like we previously declared todos (id,todo,checked) so  function call {}declare it date.now helps to generate a number which are use for id.
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }

 const updatedTodo=(id,todo)=>{
    //todos all id check(map use) which id match for this id that change..prevTodo for accessing every elm declare it
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo :prevTodo)));
 
 }
 const deleteTodo=(id)=>{
    //filter for all value print but without that condition
   setTodos((prev)=>prev.filter((todo)=>todo.id!==id));
 }
 const toggleComplete=(id)=>{
  //todos then checked do toggle state..? true(all value print but only checked toggle state):false ..
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? {...prevTodo,checked:!prevTodo.checked}:prevTodo)))//spread
 }

 //local storage only getdata(key) and set data(key,value) in string format(browser save already)(not use of server side rendering)(all data prev open in browser save in todos so useEffect use)
 useEffect(()=>{
 const todos=JSON.parse(localStorage.getItem("todos"));//brower data string convert to json & store

 if(todos && todos.length>0){//todos me kuch he ya nahin and array ke andar obj so length >0
  setTodos(todos);
 }
 },[])

 useEffect(()=>{
    //browser set data(key,value) in string format but in code json format present so convert it.
    localStorage.setItem("todos",JSON.stringify(todos));
 },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
