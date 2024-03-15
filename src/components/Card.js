import Link from "next/link";
const Card = ({ title, description, image,link }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-2 mx-2">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h2 className=" text-gray-600 font-bold mb-2 text-center">{title}</h2>
        <p className="text-gray-600 text-center">{description}</p>
        <Link href={link}>
        <button className=" px-8 mx-12 py-1 rounded-md border-2 border-orange-500 text-orange-500 cruser-pointed text-center">View Details</button>
        </Link>
      </div>
    );
  };
  
  export default Card;