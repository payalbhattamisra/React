import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   //hooks use here means read
   let [counter,setCounter]=useState(15);
    //let counter=15;
    const addcounter=() => {
      // counter=counter+1;
      // console.log("clicked",counter);
      // setCounter(counter);

      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // only 1 increase bcz of useState

      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      //here function (()=>{});but {} by using this you have to return something so not use ...use to store prevcounter and then update 
     }
     const removecounter=()=>{
     // console.log("clicked",counter);
      // counter=counter-1;
      setCounter(counter-1);
     }
  return (
    <>
       <h1>payal ji padhiye</h1>
       <h2>counter:{counter}</h2>
       <button onClick={addcounter}>Add counter {counter}</button>
       <br />
       <button onClick={removecounter}>Remove counter {counter}</button>
    </>
  )
}

export default App
