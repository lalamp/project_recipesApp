'use client'

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import Image from "next/image"
import Link from "next/link"

const LoginForm = () => {
    return (
    <div className="flex w-full m-5 px-20 justify-center items-center gap-20">
        {/* Caixa de Login */}
        <div className="relative flex flex-col items-center rounded-lg px-32 pt-20 pb-40 border-red-950 border-4 w-11/12 lg:w-3/5">
            {/* Título */}
            <h1 className="text-5xl text-center text-rose-950 mb-7">LOGIN</h1>

            {/* Input */}
            <div className="flex flex-col sm:w-80 w-64 p-5">
                <Input 
                    type="email" 
                    placeholder="Email" 
                    className="mb-5 rounded-none border-x-0 border-t-0 border-b-black"
                />
                <Input 
                    type="password" 
                    placeholder="Senha" 
                    className="mb-2 rounded-none border-x-0 border-t-0 border-b-black"
                />
                <Button 
                    type="submit"  
                    className="bg-rose-950 mt-5 rounded-lg text-white">
                        LOGIN
                </Button>

                {/* Login com Google */}
                <p className="text-center text-xs my-2">OU</p>
                <Button className="gap-2 border-black border">
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
            <div className="flex absolute bottom-5">
                <p className="text-center text-rose-950 text-wrap">
                    Não possue uma conta?
                    <Link 
                        href="/creatAccount"
                        className="pl-1 text-blue-600 hover:text-blue-800">
                            Criar Conta
                    </Link>
                </p>
            </div>
        </div>

        {/* Imagem*/}
        <div className="hidden lg:flex">
            <Image
            alt="Imagem da página de login"
            src="/background-loginpage.png"
            width={550}
            height={550}
            />
        </div>
    </div>
    );
}
 
export default LoginForm