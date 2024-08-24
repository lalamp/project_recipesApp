import React from "react"
import Image from "next/image"

import Header2 from "../components/Header2"
import RecipeCard from "../components/RecipeCard"

import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header2 />

      {/* Main */}
      <main className="flex-1 flex flex-col items-center overflow-auto">
        {/* Busca */}
        <div className="w-4/5">
            <Input type="text" placeholder="Search..." className="rounded-2xl border border-rose-950 bg-gray-100"/>
        </div>

        {/* Busca Rápida */}
        <div className="flex w-full items-center justify-center">
            <Button className="p-0"><IoIosArrowBack/></Button>
            <div className="flex w-4/5 m-5 gap-2 overflow-auto [&::-webkit-scrollbar]:hidden md:justify-center">
                <Button className="bg-rose-950 text-white">Almoço</Button>
                <Button className="bg-rose-950 text-white">Jantar</Button>
                <Button className="bg-rose-950 text-white">Saudável</Button>
                <Button className="bg-rose-950 text-white">Fast-food</Button>
                <Button className="bg-rose-950 text-white">Doce</Button>  
            </div>
            <Button className="p-0"><IoIosArrowForward/></Button>
        </div>
        

        {/* Feed */}
        <div className="flex flex-col w-full p-5">
            {/* Following */}
            <p className="font-bold text-gray-600 mb-2">FOLLOWING</p>
            <div className="flex w-full items-center">
              <Button className="p-0 mr-2"><IoIosArrowBack/></Button>
              <div className="flex w-full gap-2 overflow-auto [&::-webkit-scrollbar]:hidden mb-5">
                  <RecipeCard />
                  <RecipeCard />
                  <RecipeCard />
              </div>
              <Button className="p-0 ml-2"><IoIosArrowForward/></Button>
            </div>

            {/* Most Popular */}
            <p className="font-bold text-gray-600 mb-2">HIGHEST SCORE</p>
            <div className="flex w-full items-center">
              <Button className="p-0 mr-2"><IoIosArrowBack/></Button>
              <div className="w-full flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden mb-5">
                  <RecipeCard />
              </div>
              <Button className="p-0 ml-2"><IoIosArrowForward/></Button>
            </div>
        </div>
      </main>
    </div>
  )
}