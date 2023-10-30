import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  title: string;
  value: number | string;
  href?: string;
  isAuthor?: boolean;
  textStyles?: string;
}

const Metric = ({
  imgUrl,
  href,
  isAuthor,
  alt,
  title,
  value,
  textStyles,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href && "rounded-full"}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        <span className={`${!isAuthor && "pt-[0.2rem]"}`}>{value}</span>
        <span
          className={`small-regular line-clamp-1 pt-[0.2rem]  ${
            isAuthor && "max-sm:hidden"
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href)
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
