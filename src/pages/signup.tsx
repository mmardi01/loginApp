import { useState } from "react";
import axios from "axios";
export default function Signup() {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!uName || !cPassword || !password)
      console.log("error");
    else if (password == cPassword) {
      const data = {
        "uname": uName,
        "password": password,
      }
      axios.post("#",data).then(()=>{
        console.log("data sent");
      }).catch(()=>{
        console.log("data has not sent")
      })
    }
    else 
      console.log("password uncorrect")
  }


  return (
    <div className=' border rounded-[30px] border-[#6c9df3] h-[400px] w-72 grid content-center'>
      <form className='text-white  grid justify-items-center' onSubmit={handleSubmit}>
        <label className='' htmlFor="username">Username</label>
        <input 
          onChange={(e)=> setUName(e.target.value) } 
          className='placeholder-[#acacac] focus:outline-none text-white px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 p-[px]' 
          type="text" 
          placeholder='Username' 
        />
        <label className='my-1' htmlFor="username">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className=' placeholder-[#acacac] focus:outline-none text-white px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 p-[px] ' 
          type="password" 
          placeholder='password' 
        />
        <label className='my-1' htmlFor="username">Password confirmation</label>
        <input
           onChange={(e) => setCPassword(e.target.value)} 
          className=' placeholder-[#acacac] focus:outline-none text-white px-[12px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 p-[px] ' 
          type="password" 
          placeholder='Password confirmation' 
        />
        <button className='mt-[30px] hover:text-[#4f59e8] tracking-wider bg-[#4f59e8] text-[hsl(0,0%,100%)] rounded-full px-5 py-2 hover:bg-[#ffffff]' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
