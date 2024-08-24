import Header2 from "@/app/components/Header2";
import RecipeCard from "@/app/components/RecipeCard";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";

const UserAccount = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header2 />

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-auto gap-2 md:flex-row md:pl-5 md:gap-8">
        {/* Perfil */}
        <div className="flex md:flex-col items-center p-3 w-full md:w-2/6 lg:w-1/5 gap-5 md:gap-2">
          {/* Avatar */}
          <div className="flex flex-col text-center">
            <Avatar className="h-28 w-28 md:w-36 md:h-36">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Imagem de Perfil</AvatarFallback>
            </Avatar>
            <p className="text-rose-950 font-bold">name</p>
          </div>

          {/* Infos Perfil */}
          <div className="flex flex-col items-center gap-5 w-4/5 md:w-full">
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
            <p className="text-rose-950 bg-gray-100 rounded-md w-full text-center p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              earum quas.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="p-3">
          <p className="font-bold text-gray-600 mb-2">POSTS</p>
          <div className="grid grid-cols-2 justify-items-center gap-2 sm:flex sm:flex-wrap sm:justify-center md:overflow-auto md:h-5/6">
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default UserAccount;
