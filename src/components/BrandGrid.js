import Image from "next/image";

const BrandGrid = ({ title, description, image }) => {
  return (
    <div className=" ">
      <Image
        className="w-[100%] h-[80px]"
        height={100}
        width={100}
        alt="car"
        src={image}
      />
      <h1 className="text-black tex-bold text-center">{title}</h1>
    </div>
  );
};
export default BrandGrid;
