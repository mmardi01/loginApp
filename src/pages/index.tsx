import Link from "next/link"
export default function Home() {
  return (
      <div className=" text-white">
        <h1 className="my-1 text-8xl font-bold">PLAY A GAME</h1>
        <p className="my-5">Just a paragraph & Just a paragraph</p>
        <div>
          <Link href={"/login"}><button className="text-2xl  hover:text-[#4f59e8] tracking-wider bg-[#4f59e8] text-[hsl(0,0%,100%)] rounded-full px-5 py-2 hover:bg-[#ffffff]">Log In</button></Link>
          <Link href={"/signup"}><button className="ml-5 text-2xl text text-[#4f59e8] tracking-wider hover:bg-[#4f59e8] hover:text-[hsl(0,0%,100%)] rounded-full px-5 py-2 bg-[#ffffff]">Sign Up</button></Link>
        </div>
      </div>
  )
}
