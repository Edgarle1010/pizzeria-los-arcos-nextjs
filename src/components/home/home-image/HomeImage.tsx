import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>["className"];
  style?: React.StyleHTMLAttributes<HTMLImageElement>["style"];
  width: number;
  height: number;

  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const HomeImage = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const localSrc = src
    ? src.startsWith("http") // https://urlcompletodalaimagen.jpg
      ? src
      : `${src}`
    : `/imgs/placeholder.jpg`;

  return (
    <Image
      src={localSrc}
      width={width}
      height={height}
      sizes="100vh"
      priority={true}
      alt={alt}
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};
