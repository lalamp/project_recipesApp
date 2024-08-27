'use client'
import { signIn } from "next-auth/react"

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GiCook } from "react-icons/gi";

import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      {/* Caixa de Login */}
      <div className="relative flex flex-col items-center justify-center mb-5 p-12 w-full">
        {/* Título */}
        <h1 className="text-5xl text-center text-rose-950 mb-3">Food To Inspire</h1>
        <h3 className="text-md text-center text-rose-950 mb-5">Desperte sua criatividade na cozinha: descubra, compartilhe e se inspire com receitas irresistíveis no Food To Inspire</h3>

        {/* Input */}
        <div className="flex flex-col w-full gap-2 items-center">
          {/* Login com Food To Inspire */}
          <Button  
              className="w-full bg-rose-950 text-white gap-2 text-wrap"
          >
            <GiCook className="text-white w-6 h-6"/>
            Login com Food To Inspire
          </Button>

          {/* Login com Google */}
          <Button 
            onClick={() => signIn('google', {callbackUrl: "/mainPage"})} 
            className="w-full gap-2 border-black border"
          >
            <Image
              alt="Fazer login com Google"
              src="/google-icon.png"
              width={18}
              height={18}
            />
            Login com Google
          </Button>
        </div>

        {/* Criar conta */}
        <div className="text-sm mt-5">
          <p className="text-center text-rose-950 text-wrap">
            Não possue uma conta?
            <Link
              href="/creatAccount"
              className="pl-1 text-blue-600 hover:text-blue-800"
            >
              Criar Conta
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

/*<Input
  type="email"
  placeholder="Email"
  className="mb-5 rounded-none border-x-0 border-t-0 border-b-black"
/>
<Input
  type="password"
  placeholder="Senha"
  className="mb-6 rounded-none border-x-0 border-t-0 border-b-black"
/>
<Button type="submit" className="bg-rose-950 rounded-lg text-white">
  LOGIN
</Button>*/