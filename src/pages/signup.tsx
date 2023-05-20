import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


export default function Signup() {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [pError, setPError] = useState(false);
  const [uError, setUError] = useState(false);
  
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (uName || !cPassword || !password)
      setUError(true)
    if (password == cPassword) {
      const data = {
        "uname": uName,
        "password": password,
      }
      axios.post("http://10.12.6.6:4000/user",data).then((respons)=>{
        if (respons.data.userid !== 'false')
          router.push("/login");
        else
          setUError(true)
      }).catch(()=>{
        console.log("data has not sent")
      })
    }
    else 
      console.log("password uncorrect")
  }


  return (
    <div className='shadow-xl bg-white border rounded-[30px] border-[#6c9df3] h-[400px] w-72 grid content-center'>
      <form className='text-[#4f59e8]  grid justify-items-center' onSubmit={handleSubmit}>
        {
          !uError ? <label className='' htmlFor="username">Username</label>  : (uError && uName.length !== 0) ? <label className='text-red-500' htmlFor="username">Username already exist</label> : <label className='text-red-500' htmlFor="username">Username can't be empty</label>
        }
        <input 
          onChange={(e)=> setUName(e.target.value) } 
          className='placeholder-[#acacac] focus:outline-none text-black px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 ' 
          type="text" 
          placeholder='username' 
        />
        <label className='my-1' htmlFor="username">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className=' placeholder-[#acacac] focus:outline-none text-black px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 ' 
          type="password" 
          placeholder='password' 
        />
        <label className='my-1 ' htmlFor="username">Password confirmation</label>
        <input
          onChange={(e) => setCPassword(e.target.value)} 
          className=' placeholder-[#acacac] focus:outline-none text-black px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 ' 
          type="password" 
          placeholder='password' 
        />
        <button className='mt-[30px] hover:text-[#4f59e8] tracking-wider bg-[#4f59e8] text-[hsl(0,0%,100%)] rounded-full px-5 py-2 hover:bg-[#ffffff]' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
