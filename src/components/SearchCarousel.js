import Image from "next/image";
import Link from "next/link";

const SearchCarousel = ({ title, description, image ,link}) => {
  return (
    <div className=" overflow-hidden  rounded-md shadow-lg">
      <div className=" overflow-hidden">
        <div className="overflow-hidden">
        
          <Image
            className="w-full h-[250px] shadow-lg "
            height={160}
            width={100}
            alt="car"
            src={image}
          />
          
        </div>
      </div>
      <div className="bg-white text-center p-2">
        <h1 className="text-black ">{title}</h1>
        <p>{description}</p>
        <Link href={link} >

        <button className="text-orange-500 border-2  border-orange-500 px-3  cruser-pointed rounded-md ">
          Car Details
        </button>
        </Link>
      </div>
    </div>
  );
};
export default SearchCarousel;
