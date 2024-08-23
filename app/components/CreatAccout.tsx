'use client'

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

import Image from "next/image"
import Link from "next/link"

const CreatAccount = () => {
    return (
    <div className="flex flex-col justify-center items-center rounded-md px-32 pt-20 pb-40 w-4/5 relative m-2">
        <h1 className="text-3xl text-center text-teal-800 mb-7">CRIAR CONTA</h1>
        <div className="flex flex-col w-96">
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
                className="mb-5 rounded-none border-x-0 border-t-0 border-b-black"
            />
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-normal text-sm">Accept terms and conditions</Label>
            </div>
            <Button 
                type="submit"  
                className="bg-teal-700 mt-5 rounded-lg text-white">
                    CRIAR CONTA
            </Button>
        </div>
        
        <div className="flex absolute bottom-5">
            <p className="text-center text-teal-700">
                Já possue uma conta?
                <Link 
                    href="/"
                    className="pl-1 text-blue-600 hover:text-blue-800">
                        Fazer Login
                </Link>
            </p>
        </div>
    </div>
    );
}
 
export default CreatAccount