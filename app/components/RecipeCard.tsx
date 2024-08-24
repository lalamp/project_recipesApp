import Image from "next/image";

import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"

import { FaRegStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
  
const RecipeCard = () => {
    return ( 
        <Card className="w-56 h-60 md:h-64 flex flex-col justify-center items-center bg-rose-950 text-white p-2">
            <CardHeader className="h-full w-full space-y-0 p-0 flex flex-col justify-center items-center">
                <CardTitle className="text-lg mb-2">Recipe Title</CardTitle>
                <Image
                    alt="Foto da receita"
                    src="/recipe-photo.jpg"
                    width={200}
                    height={50}
                />
                <p className="text-sm">@username</p>
            </CardHeader>
            <CardContent className="w-full h-fit flex justify-center items-center pb-3">
                <Button className="flex gap-1 font-normal">
                    <FaRegStar className="w-4 h-4" />
                    <p>5.0</p>
                </Button>
                <div className="flex gap-1 text-sm font-normal items-center px-4">
                    <IoIosTimer className="w-5 h-5" />
                    <p>2h</p>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default RecipeCard;