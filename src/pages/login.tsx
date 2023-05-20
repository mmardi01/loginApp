import React from 'react'

export default function Login() {
  return (
    <div className=' border rounded-[30px] border-[#6c9df3] h-[400px] w-72 grid content-center'>
      <form className='text-white  grid justify-items-center  '>
        <label className=''  htmlFor="username">Username</label>
        <input className='placeholder-[#acacac] focus:outline-none text-white px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 p-[px]' type="text" placeholder='username'/>
        <label className='my-1' htmlFor="username">Password</label>
        <input  className=' placeholder-[#acacac] focus:outline-none text-white px-[60px] py-[10px] w-[200px] bg-transparent border rounded-[30px] border-[#6c9df3] my-2 p-[px] 'type="password"  placeholder='password'/>
        <button className='mt-[30px] hover:text-[#4f59e8] tracking-wider bg-[#4f59e8] text-[hsl(0,0%,100%)] rounded-full px-5 py-2 hover:bg-[#ffffff]' type='submit'>Log in</button>
      </form>
    </div>
  )
}
