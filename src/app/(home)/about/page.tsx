import { Title } from "@/components";
import { HomeBody, HomeMobileSlideshow } from "@/components";

export default function AboutPage() {
  const images = ["/home/home-1.jpg", "/home/home-2.jpg", "/home/home-3.jpg"];

  return (
    <div className="flex justify-center items-center">
      <div className="mt-2 mb-20 grid grid-cols-1 gap-3 max-w-[1600px]">
        <HomeMobileSlideshow title="home" images={images} />

        <Title title="Acerca de nosotros" className="mx-4" />

        <div className="grid grid-cols-1 gap-2 mx-4">
          <p>
            Somos un restaurante enfocado en el ambiente familiar, ofrecemos
            servicio de desayunos, platillos, deliciosos postres y nuestra
            especialidad: las pizzas. Elaborados con productos regionales de la
            mas alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
}
