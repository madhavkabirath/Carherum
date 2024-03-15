import Image from "next/image";
import Link from "next/link";

const Grid = ({ title, description, image,link }) => {
  
  return (
    <div className="bg-white shadow-md rounded-md p-2 mx-8 justify-center ">
      <Link href={link}>
        <img
          src={image}
          alt={title}
          className="w-30 h-40 object-cover rounded-md mb-4"
        />
      </Link>

      <h2 className=" text-gray-600 font-bold mx-2 mb-2 text-center">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Grid;
