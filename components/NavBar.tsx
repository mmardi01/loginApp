import Link from "next/link"


export default function NavBar() {
  return (
    <div className="mx-[5%] h-[60px] flex items-center w-[90%]  border-b-2 border-[#4f59e8] fixed justify-between ">
        <div>
            <Link href={"/"}>
                <h1 className=" text-[#fff] font-bold italic text-3xl">Logo</h1>
            </Link>
        </div>
        <ul className="text-white ml-[30px] text-[18px] font-[500]">
            <Link className="mx-[30px]" href={"/"}>Home</Link>
            <Link className="mx-[30px]" href={"/"}>Games</Link>
            <Link  className="mx-[30px]" href={"/"}>Search</Link>
        </ul>
        <div>
          <Link href={"/login"}><button className="text-1xl  hover:text-[#4f59e8] tracking-wider bg-[#4f59e8] text-[hsl(0,0%,100%)] rounded-full px-5 py-2 hover:bg-[#ffffff]">Log In</button></Link>
          <Link href={"/signup"}><button className="ml-5 text-1xl text text-[#4f59e8] tracking-wider hover:bg-[#4f59e8] hover:text-[hsl(0,0%,100%)] rounded-full px-5 py-2 bg-[#ffffff]">Sign Up</button></Link>
        </div>
    </div>
  )
}
