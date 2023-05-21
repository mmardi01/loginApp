import { useState } from "react";
import axios from "axios";



export default function Login() {

  const [uName, setUName] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState("");
  const [uError, setUError] = useState(false);
  const [pError, setPError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (password.length == 0) {
      setPError(true)
    }
    else {
      setPError(false)
    }
    if (uName.length == 0)
        setUError(true)
    else {
      setUError(false)
    }
    if (uName.length !== 0 && password.length !== 0) {
      axios.get("#").then(() => {console.log("success")})
    }
  }
  
  return (
      <div className='shadow-xl bg-white border rounded-[30px] border-[#6c9df3] h-[600px] w-[400px] grid content-center'>
          <form className='text-[#4f59e8]  grid justify-items-center' onSubmit={handleSubmit}>
            {
               (uError && uName.length === 0) ?  <label className='text-red-500' htmlFor="username">Username can't be empty</label> : <label className='' htmlFor="username">Username</label>
            }
            <input 
              onChange={(e)=> setUName(e.target.value) } 
              className='placeholder-[#acacac] focus:outline-none text-black px-[20px] py-[10px] w-[300px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 ' 
              type="text" 
              placeholder='username'
              id="username"
            />
            {
              (pError && password.length === 0) ?  <label className='text-red-500' htmlFor="password">Invalid password</label> : <label className='' htmlFor="password">Password</label>
            }
            <input
              onChange={(e) => setPassword(e.target.value)}
              className=' placeholder-[#acacac] focus:outline-none text-black px-[20px] py-[10px] w-[300px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 ' 
              type="password" 
              placeholder='password'
            id="password"
            />
            <button className='mt-6 text-2xl  hover:text-[#4f59e8] tracking-wider bg-[#4f59e8] text-[hsl(0,0%,100%)] rounded-full px-5 py-2 hover:bg-[#ffffff]' type='submit'>Log In</button>
          </form>
        </div>
  )
}
