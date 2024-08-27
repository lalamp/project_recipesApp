import LoginForm from "./components/LoginForm"
import Header1 from "./components/Header1";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header1 />
      <div className="flex-1 flex w-full">
        <div className="flex items-center justify-center md:w-4/6 lg:w-5/6 xl:w-3/6">
          <LoginForm />
        </div>
        <div className="h-full w-full hidden md:flex flex-col">
          <div className="relative w-full hidden md:flex md:h-1/2 xl:h-full">
            <Image
              alt="Imagem de receita"
              src="/bg-1.jpg"
              fill
            />
          </div>
          <div className="relative w-full h-1/2 hidden md:flex xl:hidden">
            <Image
              alt="Imagem de receita"
              src="/bg-4.jpg"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}
