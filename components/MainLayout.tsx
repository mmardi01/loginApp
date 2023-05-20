
export default function MainLayout({children}: any) {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-cover bg-center bg-fixed  img">
        {
            children
        }
    </div>
  )
}
