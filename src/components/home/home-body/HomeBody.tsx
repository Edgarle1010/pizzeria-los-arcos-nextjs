import { HomeImage } from "@/components";

interface Props {
  className?: string;
}

export const HomeBody = ({ className }: Props) => {
  return (
    <div className={className}>
      <HomeImage
        width={600}
        height={500}
        src="/home/home-body.png"
        alt="body-home"
        className="object-fill"
      />
    </div>
  );
};
