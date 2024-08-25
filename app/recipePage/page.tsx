"use client"
import React from "react"
import Select from 'react-select';
import Header2 from "../components/Header2"

import { Textarea } from "../components/ui/textarea"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "../components/ui/dialog"
import { Select as ShadcnSelect, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../components/ui/select"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../components/ui/table"
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from "../components/ui/command"
import {Popover, PopoverContent, PopoverTrigger} from "../components/ui/popover"

import { ChevronDown, X } from "lucide-react"

export default function AddRecipe() {
  return (
    <>
      {/* Header */}
      <Header2 />

      {/* Main */}
      <main className="flex flex-col gap-2 text-rose-950 overflow-auto items-center">
        {/* Título */}
        <h1 className="text-center font-bold text-rose-950 text-3xl">NOVA RECEITA</h1>

        {/* Infos Gerais */}
        <div className="flex flex-col gap-2 p-2 w-full sm:w-4/5">
            {/* Nome */}
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
            {/* Descrição */}
            <div className="w-full">
                <Label htmlFor="input_descricao">Descrição</Label>
                <Textarea 
                    placeholder="Descrição"
                    id="input_descricao"
                    required
                    className="w-full h-8 rounded-sm border border-rose-950 bg-gray-100"
                />  
            </div>
            {/* Tempo, Porções e Categoria */}
            <div className="flex gap-8">
                {/* Tempo */}
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
                {/* Porções */}
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
            
            {/* Categoria */}
            <div className="flex flex-col gap-1">
                <Label>Categorias</Label>
                <Select
                    isMulti
                    options={[{ value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' }]}
                    className="rounded-sm border border-rose-950 bg-gray-100"
                />
            </div>

            {/* Calorias e Macros */}
            <div className="flex gap-8">
                {/* Calorias */}
                <div>
                    <Label htmlFor="input_calorias">Calorias (kcal)</Label>
                    <Input
                        type="number" 
                        id="input_calorias"
                        max="5000"
                        min="0"
                        placeholder="Calorias"
                        className="w-24 h-6 rounded-sm border border-rose-950 bg-gray-100"
                    />   
                </div>
                <div>
                    <Label>Macros</Label>
                    {/* Carboidrato */}
                    <div className="ml-5">
                        <Label htmlFor="input_carbs">Carboidratos (gramas)</Label>
                        <Input
                            type="number" 
                            id="input_carbs"
                            max="1000"
                            min="0"
                            placeholder="Carboidratros"
                            className="w-24 h-6 rounded-sm border border-rose-950 bg-gray-100"
                        /> 
                    </div>
                    {/* Proteína */}
                    <div className="ml-5">
                        <Label htmlFor="input_proteinas">Proteínas (gramas)</Label>
                        <Input
                            type="number" 
                            id="input_proteinas"
                            max="1000"
                            min="0"
                            placeholder="Proteínas"
                            className="w-24 h-6 rounded-sm border border-rose-950 bg-gray-100"
                        /> 
                    </div>
                </div>
            </div>
        </div>

        {/* Fotos e Vídeos */}
        <div className="flex gap-2 p-2 w-full sm:w-4/5">
            <div>
                <Label htmlFor="input_img">Imagens</Label>
                <Input 
                    type="file"
                    id="input_img"
                    accept="image/png, image/jpg, image/jpeg"
                    multiple
                    required
                    className="h-15 rounded-sm border border-rose-950 bg-gray-100"
                />
            </div>
            <div>
                <Label htmlFor="input_img">Vídeos</Label>
                <Input 
                    type="file"
                    id="input_img"
                    accept="video/mp4, video/webm, video/ogg, video/quicktime"
                    multiple
                    className="h-15 rounded-sm border border-rose-950 bg-gray-100"
                />
            </div>
        </div>

        {/* Ingredientes */}
        <div className="flex flex-col gap-2 p-2 w-full sm:w-4/5">
            <Label>Ingredientes</Label>
            <Dialog>
                {/* Botão para adicionar ingredientes */}
                <DialogTrigger asChild>
                    <Button className="w-1/2 rounded-sm border border-rose-950 bg-gray-100">Adicionar Ingredientes</Button>
                </DialogTrigger>

                {/* Caixa para adicionar ingredientes */}
                <DialogContent className="w-5/6 bg-white text-rose-950">
                    <DialogHeader>
                        <DialogTitle>Adicionar Ingredientes</DialogTitle>
                        <DialogDescription>
                            Escolha o ingrediente e sua quantidade.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Ingrediente e Medida */}
                    <div className="flex gap-3 items-center">
                        {/* Ingrediente */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="w-1/2 font-normal border border-gray-200 justify-between">
                                    Ingrediente
                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="ml-2 bg-white text-rose-950">
                                <Command>
                                    <CommandInput placeholder="Insira um ingrediente..." />
                                        <CommandList>
                                            <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
                                                <CommandItem>Arroz</CommandItem>
                                                <CommandItem>Feijão</CommandItem>
                                                <CommandItem>Ovo</CommandItem>
                                        </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        <p>-</p>

                        {/* Medida */}
                        <Input
                            type="number" 
                            id="input_porcoes"
                            max="20"
                            min="0"
                            placeholder="0"
                            required
                            className="w-14 rounded-sm border- text-rose-950 border-gray-100"
                        />
                        <ShadcnSelect>
                            <SelectTrigger className="w-1/2">
                                <SelectValue placeholder="Medida"/>
                            </SelectTrigger>
                            <SelectContent className="bg-white text-rose-950">
                                <SelectItem value="unidade">unidade(s)</SelectItem>
                                <SelectItem value="mililitro">mililitro(s)</SelectItem>
                                <SelectItem value="grama">grama(s)</SelectItem>
                                <SelectItem value="xícara">xícara(s) de chá</SelectItem>
                                <SelectItem value="colher-sopa">colher(es) de sopa</SelectItem>
                                <SelectItem value="colher-chá">colher(es) de chá</SelectItem>
                            </SelectContent>
                        </ShadcnSelect>
                    </div>

                    {/* Botão para confirmar a adição dos ingredientes escolhidos */}
                    <Button className="bg-rose-950 text-white">Adicionar ingrediente</Button>
                </DialogContent>
            </Dialog>

            {/* Tabela com os ingredientes */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Ingredientes</TableHead>
                        <TableHead>Medida</TableHead>
                        <TableHead className="w-3"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="font-normal">
                    <TableRow>
                        <TableCell>Ovo</TableCell>
                        <TableCell>1 unidade</TableCell>
                        <TableCell><Button><X className="w-5"/></Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        {/* Botão para criar receita */}
        <Button  className="w-4/5 bg-rose-950 text-white self-center mt-2 mb-5 sm:w-3/5">Adicionar Receita</Button>
      </main>
    </>
  )
}