import Image from "next/image";

import Header2 from "@/app/components/Header2";
import { Button } from "@/app/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/app/components/ui/carousel"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/app/components/ui/table"
  
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoIosTimer } from "react-icons/io";
import { FaBowlFood } from "react-icons/fa6";

const RecipePage = () => {
    return ( 
        <>
            {/* Header */}
            <Header2 />

            {/* Main */}
            <main className="flex flex-col items-center gap-2">
                {/* Nome */}
                <h1 className="text-xl text-rose-950 font-bold">NOME DA RECEITA</h1>

                {/* Infos: avaliação, tempo e porções */}
                <div className="flex gap-3 w-fit px-3 justify-center rounded-lg bg-rose-950 text-white">
                    {/* Avaliação */}
                    <Button className="flex gap-1 font-normal pr-4">
                        <FaRegStar className="w-4 h-4" />
                        <p>5.0</p>
                    </Button>

                    {/* Tempo */}
                    <div className="flex gap-1 text-sm font-normal items-center px-4">
                        <IoIosTimer className="w-5 h-5" />
                        <p>2h</p>
                    </div>

                    {/* Porções */}
                    <div className="flex gap-1 text-sm font-normal items-center px-4">
                        <FaBowlFood className="w-5 h-4" />
                        <p>5</p>
                    </div>
                </div>

                {/* Categorias */}
                <div className="flex w-4/5 items-center justify-center">
                    <div className="flex gap-1 items-center text-nowrap overflow-auto [&::-webkit-scrollbar]:hidden">
                        <p className="text-sm bg-rose-950 text-white font-light px-2 rounded-md">Almoço</p>
                        <p className="text-sm bg-rose-950 text-white font-light px-2 rounded-md">Jantar</p>
                        <p className="text-sm bg-rose-950 text-white font-light px-2 rounded-md">Saudável</p>
                        <p className="text-sm bg-rose-950 text-white font-light px-2 rounded-md">Fast-food</p>
                        <p className="text-sm bg-rose-950 text-white font-light px-2 rounded-md">Doce</p>  
                    </div>  
                </div>

                {/* Imagem e Vídeo */}
                <Carousel className="w-[400px] h-[250px]">
                    <CarouselContent className="h-[250px] w-[400px] m-0 place-items-center">
                        <CarouselItem className="p-0 m-0">
                            <Image
                                alt="Imagem da receita"
                                src="/recipe-photo.jpg"
                                width={400}
                                height={250}
                            />
                        </CarouselItem>
                        <CarouselItem className="p-0 m-0">
                            <Image
                                alt="Imagem da receita"
                                src="/recipe-photo.jpg"
                                width={400}
                                height={250}
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="bg-rose-950 text-white ml-2"/>
                    <CarouselNext className="bg-rose-950 text-white mr-2"/>
                </Carousel>
                

                {/* Ingredientes, Calorias e Macros*/}
                <div className="flex gap-6 w-4/5">
                    {/* Ingredientes */}
                    <div className="w-full">
                        <p className="bg-rose-950 text-white font-bold px-2 rounded-md text-sm w-fit">INGREDIENTES</p>
                        {/* Tabela com os ingredientes */}
                        <div className="h-[200px] overflow-auto border border-gray-300 rounded-md mt-2">
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Ingrediente</TableHead>
                                        <TableHead>Medida</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="h-[200px] overflow-auto">
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ovo</TableCell>
                                        <TableCell>1 unidade</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table> 
                        </div>
                    </div>

                    {/* Infos: calorias e macros */}
                    <div className="flex flex-col gap-2 h-fit p-2 px-3 text-sm rounded-lg bg-rose-950 text-white">
                            <p>Calorias: 300kcal</p>
                            <p>Carboidratos: 20g</p>
                            <p>Proteínas: 18g</p>
                    </div>
                </div>                
            </main>
        </>
    );
}
 
export default RecipePage;