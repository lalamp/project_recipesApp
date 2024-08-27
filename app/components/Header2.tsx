'use client'
import Link from "next/link";

import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { LuAlignJustify } from "react-icons/lu";

import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

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
        <Button className="absolute right-2 md:right-5" onClick={() => signOut({callbackUrl: "/"})}>
            <LuAlignJustify className="w-10 h-7 text-white" />
        </Button>
      </header>
    </>
  );
};

export default Header2;
