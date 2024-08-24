import LoginForm from "./components/LoginForm"
import Image from "next/image"
import Header1 from "./components/Header1";

export default function Home() {
  return (
    <>
      <Header1 />
      <div className="w-full flex justify-center h-4/5">
        <LoginForm />
      </div>
    </>
  )
}
