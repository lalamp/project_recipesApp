import Link from "next/link";

import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { LuAlignJustify } from "react-icons/lu";

import { Button } from "./ui/button";

const Header2 = () => {
  return (
    <>
      <header className="flex justify-center items-center bg-rose-950 h-20 sm:h-24 w-full mb-5 relative">
        <div className="flex justify-between sm:w-1/3">
          <Link href="/mainPage">
            <Button>
              <IoMdHome className="w-10 h-8 text-white" />
            </Button>
          </Link>
          <Link href="">
            <Button>
              <MdOutlineFoodBank className="w-10 h-8 text-white" />
            </Button>
          </Link>
          <Link href="/userAccount/1">
            <Button>
              <IoPersonSharp className="w-10 h-7 text-white" />
            </Button>
          </Link>
        </div>
        <Button className="absolute right-2 md:right-5">
            <LuAlignJustify className="w-10 h-7 text-white" />
        </Button>
      </header>
    </>
  );
};

export default Header2;
