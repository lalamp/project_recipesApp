'use client'

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import Image from "next/image"
import Link from "next/link"

const LoginForm = () => {
    return (
    <div className="flex flex-col justify-center items-center rounded-md px-32 pt-20 pb-40 w-4/5 relative m-2">
        <h1 className="text-5xl text-center text-teal-800 mb-7">LOGIN</h1>
        <div className="flex flex-col w-96">
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
                className="bg-teal-700 mt-5 rounded-lg text-white">
                    LOGIN
            </Button>

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
        
        <div className="flex absolute bottom-5">
            <p className="text-center text-teal-700">
                Não possue uma conta?
                <Link 
                    href="/creatAccount"
                    className="pl-1 text-blue-600 hover:text-blue-800">
                        Criar Conta
                </Link>
            </p>
        </div>
    </div>
    );
}
 
export default LoginForm