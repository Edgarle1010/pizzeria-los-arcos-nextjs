"use client";

import { HomeImage } from "@/components";
import { useState } from "react";

interface Props {
  className?: string;
}

export const HomeBody = ({ className }: Props) => {
  // Define images for each menu category
  const menuImages = {
    pizzas: "/home/home-pizza.png",
    desayunos: "/home/home-desayunos.png",
    entradas: "/home/home-ensalada.png",
    hamburguesas: "/home/home-hamburguesas.png",
    mariscos: "/home/home-mariscos.png",
    nieves: "/home/home-nieve.png",
    mas: "/home/home-mas.png",
  };

  const [currentImage, setCurrentImage] = useState(menuImages.pizzas);

  const handleInteraction = (imageKey: keyof typeof menuImages) => {
    setCurrentImage(menuImages[imageKey]);
  };

  const resetImage = () => {
    setCurrentImage(menuImages.pizzas);
  };

  return (
    <div
      className="flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/bg-beige.png')" }}
    >
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 max-w-[1600px]">
        {/* Menu categories */}
        <div className="col-span-1">
          {/* Red cursive "Disfruta!" text */}
          <h1 className="text-center text-red-500 font-serif italic text-4xl mb-8 font-bold">
            Disfruta!
          </h1>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("pizzas")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("pizzas")}
            >
              PIZZAS
            </h2>
          </div>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("desayunos")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("desayunos")}
            >
              DESAYUNOS
            </h2>
          </div>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("entradas")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("entradas")}
            >
              ENTRADAS
            </h2>
          </div>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("hamburguesas")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("hamburguesas")}
            >
              HAMBURGUESAS
            </h2>
          </div>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("mariscos")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("mariscos")}
            >
              MARISCOS
            </h2>
          </div>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("nieves")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("nieves")}
            >
              NIEVES
            </h2>
          </div>

          <div className="border-b-large border-red-200 py-2">
            <h2
              className="text-center text-gray-500 text-2xl font-semibold tracking-wide cursor-pointer hover:text-red-500 transition-colors duration-300"
              onMouseEnter={() => handleInteraction("mas")}
              onMouseLeave={resetImage}
              onClick={() => handleInteraction("mas")}
            >
              Y MÁS...
            </h2>
          </div>
        </div>

        {/* Food images at the bottom */}
        <div className="col-span-1 flex items-center justify-center h-full">
          <div className="w-full transition-all duration-300 ease-in-out">
            <HomeImage
              width={1200}
              height={1200}
              src={currentImage}
              alt="food-image"
              className="w-full h-auto object-contain rounded-full overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
