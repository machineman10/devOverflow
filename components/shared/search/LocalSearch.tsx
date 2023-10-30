import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Props {
  route: string;
  imgUrl: string;
  iconPosition: string;
  placeholder: string;
  className?: string;
}

const LocalSearch = ({
  route,
  imgUrl,
  iconPosition,
  placeholder,
  className,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${className}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgUrl}
          width={24}
          height={24}
          alt="search icon"
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        className="no-focus text-dark400_light700 placeholder paragraph-regular border-none bg-transparent shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgUrl}
          width={24}
          height={24}
          alt="search icon"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
