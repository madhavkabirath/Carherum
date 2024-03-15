import Link from "next/link";

const ModelGrid = ({ title, description, image, link }) => {
  return (
    <div className=" flex bg-white row-auto shadow-2xl mx-8 border-2 border-black-100">
      <div className=" ">
        <Link href={link}>
          <img
            src={image}
            alt={title}
            className=" h-40 object-cover w-full  mb-4"
          />
        </Link>
      </div>
      <div className="pt-4 mx-12 mt-4">
        <h2 className=" text-gray-600 text-xl font-bold mx-4 my-2">{title}</h2>
        <p className="text-gray-600 mx-4">{description}</p>
        <Link href={link}>
          <button className="text-orange-500 border-2 rounded-md  border-orange-500 px-3  cruser-pointed m-2 ">
            {" "}
            View Car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModelGrid;
