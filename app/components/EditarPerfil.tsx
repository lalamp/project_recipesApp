'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { Label } from "@radix-ui/react-label";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { User } from "@prisma/client";

interface EditarPerfilProps {
    user: User
  }

const EditarPerfil = ({ user }: EditarPerfilProps) => {
    return (  
        <>
        <DialogContent className="bg-white">
            <DialogHeader>
                <DialogTitle className="text-rose-950 text-xl font-bold">Editar Perfil</DialogTitle>
            </DialogHeader>
            {/* Infos Gerais */}
            <DialogDescription className="flex flex-col items-center gap-2">
                {/* Nome */}
                <div className="w-full">
                    <Label htmlFor="input_name" className="text-rose-950">Nome</Label>
                    <Input 
                        type="text"
                        id="input_name"
                        placeholder={user.name}
                        className="w-full h-8 rounded-full border border-rose-950 bg-gray-100"
                    />  
                </div>
                {/* Username */}
                <div className="w-full">
                    <Label htmlFor="input_username" className="text-rose-950">Username</Label>
                    <Input 
                        type="text"
                        id="input_username"
                        placeholder={user.username}
                        className="w-full h-8 rounded-full border border-rose-950 bg-gray-100"
                    />  
                </div>
                {/* Bio */}
                <div className="w-full">
                    <Label htmlFor="input_bio" className="text-rose-950">Bio</Label>
                    <Textarea 
                        id="input_bio"
                        placeholder={user.bio}
                        className="w-full h-8 rounded-2xl border border-rose-950 bg-gray-50"
                    />  
                </div>
                {/* Password */}
                <Label className="place-self-start pt-3 text-rose-950 font-bold">Senha</Label>
                <div className="w-full">
                    <Label htmlFor="input_oldsenha" className="text-rose-950">Senha Antiga</Label>
                    <Input 
                        type="text"
                        id="input_oldsenha"
                        placeholder="old password"
                        className="w-full h-8 rounded-full border border-rose-950 bg-gray-100"
                    />  
                </div>
                <div className="w-full">
                    <Label htmlFor="input_newsenha" className="text-rose-950">Nova Senha</Label>
                    <Input 
                        type="text"
                        id="input_newsenha"
                        placeholder="new password"
                        className="w-full h-8 rounded-full border border-rose-950 bg-gray-100"
                    />  
                </div>
                <Button className="bg-rose-950 text-white text-sm font-bold h-7 rounded-full mt-5">
                    Salvar Alterações
                </Button>
            </DialogDescription>
        </DialogContent>
        </>
    );
}
 
export default EditarPerfil;