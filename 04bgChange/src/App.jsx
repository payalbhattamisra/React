import { useState } from 'react'
 
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className='flex flex-wrap justify-center bg-white gap-3 px-2 py-1 rounded-3xl'>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'red'}} onClick={()=>setColor("red")}>Red</button>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'green'}} onClick={()=>setColor("green")}>Green</button>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'blue'}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'olive'}} onClick={()=>setColor("olive")}>Olive</button>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'grey'}} onClick={()=>setColor("grey")}>grey</button>
        <button className='text-black rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'yellow'}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='text-black rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'pink'}} onClick={()=>setColor("pink")}>Pink</button>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'purple'}} onClick={()=>setColor("purple")}>Purple</button>
        <button className='text-black rounded-full px-3 py-1  shadow-lg' style={{backgroundColor:'#DFA8E4'}} onClick={()=>setColor("#DFA8E4")}>Lavender</button>
        <button className='text-black rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'white'}} onClick={()=>setColor("white")}>White</button>
        <button className='text-white rounded-full px-3 py-1 outline-none shadow-lg' style={{backgroundColor:'black'}} onClick={()=>setColor("black")}>Black</button>
      </div>
     </div>
      </div>
    </>
  )
}

export default App
