import Header2 from "@/app/components/Header2";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";

const UserAccount = () => {
  return (
    <>
      <Header2 />

      <main className="flex flex-col m-2 md:flex-row md:pl-5 gap-2">
        {/* Perfil */}
        <div className="flex md:flex-col items-center justify-center p-3 w-full md:w-2/6 lg:w-1/5 border border-black gap-5 md:gap-2">
          {/* Avatar */}
          <div className="flex flex-col text-center">
            <Avatar className="h-28 w-28 md:w-36 md:h-36">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Imagem de Perfil</AvatarFallback>
            </Avatar>
            <p className="text-rose-950 font-bold">name</p>
          </div>

          {/* Infos Perfil */}
          <div className="flex flex-col items-center justify-center gap-5 w-4/5 md:w-full">
            <h3 className="text-rose-950 font-bold">@username</h3>
            <div className="flex flex-row  w-full justify-center">
              <Button className="flex flex-col font-normal">
                <p>0</p>
                <p>Followers</p>
              </Button>
              <Button className="flex flex-col font-normal">
                <p>0</p>
                <p>Following</p>
              </Button>
            </div>
            <p className="text-rose-950 bg-gray-100 rounded-md w-full text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              earum quas. Quidem odit, minus totam reiciendis incidunt fugiat?
              Officiis sed deleniti nesciunt placeat possimus eveniet impedit
              magnam expedita cumque atque.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="border border-black h-20 w-1/2">
        </div>
      </main>
    </>
  );
};

export default UserAccount;
