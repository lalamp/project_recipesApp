'use client'

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Header1 from "./Header1";

import Link from "next/link"

const CreatAccount = () => {
    return (
        <>
            <Header1/>
            <div className="w-full flex justify-center h-4/5">
                <div className="relative flex flex-col items-center rounded-lg p-12 sm:p-20 border-red-950 border-4 w-11/12 lg:w-3/5">
                    <h1 className="text-4xl text-center text-rose-950 mb-7">CRIAR CONTA</h1>
                    <div className="flex flex-col w-4/5">
                        <Input 
                            type="text" 
                            placeholder="Nome" 
                            className="mb-3 sm:mb-5 rounded-none border-x-0 border-t-0 border-b-black"
                        />
                        <Input 
                            type="text" 
                            placeholder="Nickname" 
                            className="mb-3 sm:mb-5 rounded-none border-x-0 border-t-0 border-b-black"
                        />
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            className="mb-3 sm:mb-5 rounded-none border-x-0 border-t-0 border-b-black"
                        />
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            className="mb-6 rounded-none border-x-0 border-t-0 border-b-black"
                        />
                        <Button 
                            type="submit"  
                            className="bg-rose-950 rounded-lg text-white">
                                CRIAR CONTA
                        </Button>
                    </div>
                    
                    <div className="flex absolute bottom-2 md:bottom-5">
                        <p className="text-center text-red-950">
                            Já possue uma conta?
                            <Link 
                                href="/"
                                className="pl-1 text-blue-600 hover:text-blue-800">
                                    Fazer Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CreatAccount