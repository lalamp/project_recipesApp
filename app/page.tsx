import LoginForm from "./components/LoginForm"
import Header1 from "./components/Header1";

export default function LoginPage() {
  return (
    <>
      <Header1 />
      <div className="w-full flex justify-center h-4/5">
        <LoginForm />
      </div>
    </>
  )
}
