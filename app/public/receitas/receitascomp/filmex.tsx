import Image from "next/image";
import Link from "next/link";

const Filme = ({
  image,
  link,
  title,
  date,
}: {
  image: string;
  link: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-5 ">
        <div className="relative h-[120px] w-[90px] overflow-hidden rounded-md">
          <Image src={image} alt={title} fill />
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={link}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color">{date}</p>
      </div>
    </div>
  );
};

export default Filme;
