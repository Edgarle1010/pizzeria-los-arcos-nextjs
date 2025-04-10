export const revalidate = 604800; // 7 días

import { HomeBody, HomeMobileSlideshow } from "@/components";

export default async function HomePage() {
  const images = [
    "/home/home-1.jpg",
    "/home/home-2.jpg",
    "/home/home-3.jpg",
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1600px]">
        <div className="col-span-1 md:col-span-3 ">
          {/* Mobile Slideshow */}
          <HomeMobileSlideshow
            title="home"
            images={images}
          />
          <HomeBody />
        </div>
      </div>
    </div>
  );
}
