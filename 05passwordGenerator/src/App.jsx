import { useState,useCallback,useEffect,useRef } from 'react'
 
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState('false');
  const [charAllowed,setcharAllowed]=useState('false');
  const [password,setpassword]=useState("")
  //use ref use when ek div ke andar input and button he,when u click button and ref the input so function call in button and ref in input
  const passwordref=useRef(null);
  const passwordGenerator =useCallback(()=>{//use call back helps to optimize with the help of dependencies (like wo use karne se kya kya effect hota he)
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str+='1234567890';
      if(charAllowed) str+='!@#$%^&*{}[]:+_=-';
      for (let i = 1; i <= length; i++) {//str length find 
      let char= Math.floor (Math.random()*str.length+1);
      //index store(+1 bcz in password never be 0 value present)
      pass+=str.charAt(char);
}
setpassword(pass);
  },[length,numberAllowed,charAllowed,setpassword]);//setpassword for optimize the password,if you use password but infinite loop started
 
  const copytoClipboard =useCallback(()=>{//use callback for optimize or function memorize
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password);
  },[password]);
  //you can't call directly password generator like passwordGenerator();so use useEffect (here it does't want to store you can call directly)
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md bg-grey rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'> 
     <h1 className=' text-white text-center text-3xl my-3'>Password Generator</h1>
     <div  className='mb-4 rounded-lg flex shadow overflow-hidden'>
      <input
      type="text" placeholder='password' value={password} 
      className='outline-none px-3 py-1 w-full'
      readOnly
      ref={passwordref}
      />
      <button className='bg-blue-500 text-white px-3 py-0.5 shrink-0'
      onClick={copytoClipboard}
      >Copy</button>
     </div>
    
    <div className='flex text-sm gap-x-2'> 
     <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6} 
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />

      <label >Length:{length}</label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setnumberAllowed(prev =>!prev)}}
      />
      <label htmlFor='numberInput' >Numbers</label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={charAllowed}
      id='charInput'
      onChange={()=>{
        setcharAllowed(prev =>!prev)}}
      />
      <label htmlFor='charInput' >characters</label>
     </div>
     
     </div>
     </div>
     </>
  )
}

export default App
