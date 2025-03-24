import Link from "next/link";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { titleFont } from "@/config/fonts";

export const Footer = () => {
  return (
    <div className="bg-gray-300 pb-2 py-6">
      <div className="grid grid-cols-1 gap-4 mx-4 sm:mx-4 mb-4">
        <div className="row-span-2 text-center">
          <Link
            href="/pdf/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-1xl antialiased font-bold rounded-md transition-all hover:bg-gray-100"
          >
            MENÚ
          </Link>
        </div>

        <div className="row-span-2 text-center">
          <Link
            className="text-1xl antialiased font-bold rounded-md transition-all hover:bg-gray-100"
            href="https://maps.app.goo.gl/MHoHuQ2ZkyCDs5ic6"
          >
            UBICACIÓN
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-1xl antialiased font-bold my-2">
          ACERCA DE NOSOTROS
        </h1>
      </div>

      <div className="flex w-full justify-center mb-6 space-x-6">
        <Link
          href="https://www.facebook.com/Losarcospizzeria"
          className="text-2xl"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/losarcospizzeria/"
          className="text-2xl"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=%2B5216251121988&text"
          className="text-2xl"
        >
          <FaWhatsapp />
        </Link>
      </div>

      <div className="flex w-full justify-center text-xs my-2">
        <Link href="/">
          <span
            className={`${titleFont.className} antialiased font-bold`}
          ></span>
          <span>PIZZERIA LOS ARCOS© {new Date().getFullYear()}</span>
          <span> TODOS LOS DERECHOS RESERVADOS</span>
        </Link>
      </div>
    </div>
  );
};
