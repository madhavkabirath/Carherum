import React from "react";
import Image from "next/image";

const CarGrid = ({ image, title, description,  }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="w-full lg:w-1/2 relative">
        <div>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={300}
            height={50}
            className="rounded-md object-cover"
          />
        </div>
      </div>
      {/* <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold p-8">{title}</h2>
        <p className="text-gray-700 mb-4">★★★★★<br/></p>
      </div> */}
    </div>
  );
};

export default CarGrid;