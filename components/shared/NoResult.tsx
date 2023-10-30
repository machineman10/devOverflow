import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  url: string;
  linkTitle: string;
}

const NoResult = ({ title, description, url, linkTitle }: Props) => {
  return (
    <div className="flex-center mt-10 w-full flex-col">
      <Image
        src="/assets/images/light-illustration.png"
        height={200}
        width={270}
        alt="no result light illustration"
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        height={200}
        width={270}
        alt="no result dark illustration"
        className="hidden object-contain dark:block"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={url}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
