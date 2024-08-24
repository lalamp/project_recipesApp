'use client'

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Header1 from "./Header1";

import Link from "next/link"

const CreatAccount = () => {
    return (
        <>
            <Header1/>
            <div className="m-8 flex flex-col justify-center items-center rounded-md px-32 pt-20 pb-32 w-3/5 relative border-red-950 border-4">
                <h1 className="text-4xl text-center text-rose-950 mb-7">CRIAR CONTA</h1>
                <div className="flex flex-col sm:w-80 w-64">
                    <Input 
                        type="text" 
                        placeholder="Nome" 
                        className="mb-5 rounded-none border-x-0 border-t-0 border-b-black"
                    />
                    <Input 
                        type="text" 
                        placeholder="Nickname" 
                        className="mb-5 rounded-none border-x-0 border-t-0 border-b-black"
                    />
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
                            CRIAR CONTA
                    </Button>
                </div>
                
                <div className="flex absolute bottom-5">
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
        </>
    );
}
 
export default CreatAccount