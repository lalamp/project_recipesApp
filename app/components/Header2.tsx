'use client'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Dialog, DialogTrigger } from "./ui/dialog"
import EditarPerfil from "./EditarPerfil";

const Header2 = () => {
  const {data : session} = useSession()
  
  return (
    <>
      <header className="flex justify-center items-center bg-rose-950 h-20 sm:h-24 w-full mb-5 relative">
        {/* Pages */}
        <div className="flex justify-between sm:w-1/3">
          {/* Home Page */}
          <Link href="/mainPage">
            <Button>
              <IoMdHome className="w-10 h-8 text-white" />
            </Button>
          </Link>

          {/* Create Recipe */}
          <Link href="/recipePage">
            <Button>
              <MdOutlineFoodBank className="w-10 h-8 text-white" />
            </Button>
          </Link>

          {/* User Page */}
          <Link href={`/userAccount/${session?.user?.id}`}>
            <Button>
              <IoPersonSharp className="w-10 h-7 text-white" />
            </Button>
          </Link>
        </div>

        {/* Side Sheet */}
        <Sheet>
          <SheetTrigger className="absolute right-5 md:right-10">
              <LuAlignJustify className="w-10 h-7 text-white" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center bg-white p-1 pt-12">
            {/* Editar Perfil */}
            <Dialog>
              <DialogTrigger className="w-full p-1 text-rose-950 text-sm font-bold border-solid border-2 border-rose-950">Editar Perfil</DialogTrigger>
              <EditarPerfil />
            </Dialog>

            {/* LogOut */}
            <Button className="absolute flex gap-1 bg-rose-950 text-white text-sm font-normal h-7 rounded-md bottom-5" onClick={() => signOut({callbackUrl: "/"})}>
                <IoMdLogOut className="w-5 h-5 text-white" />
                Log Out
            </Button>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default Header2;
