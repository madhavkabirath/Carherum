import Image from "next/image";
import Link from "next/link";

const Carousel = ({ title, description, image ,link}) => {
  return (
    
    <div className=" overflow-hidden  rounded-md ">
      <div className=" overflow-hidden">
      <div className="overflow-hidden">
      <Link href={link}>
        <Image
          className="w-full h-[150px] "
          height={100}
          width={100}
          alt="car"
          src={image}
        />
        </Link>
      </div>
      </div>
      <div className="bg-white ">
        <h1 className="text-black tex-bold text-center">{title}</h1>
        {/* <p>{description}</p> */}
        {/* <button className="text-black">Get it</button> */}
      </div>
    </div>
  );
};
export default Carousel;
