import React from "react"
import Image from "next/image"

import Header2 from "../components/Header2"

import { Textarea } from "../components/ui/textarea"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"


export default function AddRecipe() {
  return (
    <>
      {/* Header */}
      <Header2 />

      {/* Main */}
      <main className="flex flex-col gap-2 text-rose-950">
        {/* Infos Gerais */}
        <div className="flex flex-col gap-2 border border-black p-2">
            <div className="w-full">
                <Label htmlFor="input_name">Nome</Label>
                <Input 
                    type="text"
                    id="input_name"
                    placeholder="Nome da receita"
                    required
                    className="w-full h-8 rounded-sm border border-rose-950 bg-gray-100"
                />  
            </div>
            <div className="w-full">
                <Label htmlFor="input_descricao">Descrição</Label>
                <Textarea 
                    placeholder="Descrição"
                    id="input_descricao"
                    required
                    className="w-full h-8 rounded-sm border border-rose-950 bg-gray-100"
                />  
            </div>
            <div className="flex gap-3">
                <div>
                    <Label htmlFor="input_tempo">Tempo (min)</Label>
                    <Input
                        type="number"
                        id="input_tempo" 
                        max="60"
                        min="0"
                        placeholder="Tempo"
                        required
                        className="w-24 h-6 rounded-sm border border-rose-950 bg-gray-100"
                    />
                </div>
                <div>
                    <Label htmlFor="input_porcoes">Porções</Label>
                    <Input
                        type="number" 
                        id="input_porcoes"
                        max="60"
                        min="0"
                        placeholder="Porções"
                        required
                        className="w-24 h-6 rounded-sm border border-rose-950 bg-gray-100"
                    />   
                </div>
            </div>
        </div>

        {/* Fotos e Vídeos */}
        <div className="flex flex-col gap-2 border border-black p-2">
            <div>
                <Label htmlFor="input_img">Imagens</Label>
                <Input 
                    type="file"
                    id="input_img"
                    accept="image/png, image/jpg, image/jpeg"
                    multiple
                    required
                    className="w-64 h-15 rounded-sm border border-rose-950 bg-gray-100"
                />
            </div>
            <div>
                <Label htmlFor="input_img">Vídeos</Label>
                <Input 
                    type="file"
                    id="input_img"
                    accept="image/png, image/jpg, image/jpeg"
                    multiple
                    className="w-64 h-15 rounded-sm border border-rose-950 bg-gray-100"
                />
            </div>
        </div>

        {/* Ingredientes */}
        <div className="flex flex-col gap-2 border border-black p-2 items-center">
            
            <Button  className="w-3/5 border border-rose-950">Adicionar Ingredientes</Button>
        </div>

        <Button  className="w-4/5 border bg-rose-950 text-white self-center">Adicionar Receita</Button>
      </main>
    </>
  )
}