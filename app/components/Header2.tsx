import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";

import { Button } from "./ui/button";

const Header2 = () => {
  return (
    <>
      <header className="flex justify-center items-center bg-rose-950 h-20 sm:h-24 w-full mb-5">
        <div className="flex justify-between sm:w-1/3">
          <Button>
            <IoMdHome className="w-10 h-8 text-white" />
          </Button>
          <Button>
            <MdOutlineFoodBank className="w-10 h-8 text-white" />
          </Button>
          <Button>
            <IoPersonSharp className="w-10 h-7 text-white" />
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header2;
