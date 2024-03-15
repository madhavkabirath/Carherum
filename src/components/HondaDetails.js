"use client";
import React from "react";
import ModelGrid from "./ModelGrid";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
    {
      id: 1,
      title: "Honda Amaze",
      imageSrc: "/assets/images/Honda/Amaze.jpeg",
      description: "Rs 20-40 lakhs*",
      Link:"/Honda_Amaze",
    },
    {
      id: 2,
      title: "Honda city",
      imageSrc: "/assets/images/Honda/city.jpeg",
      description: "Rs 22-45 lakhs*",
      Link:"/Honda_city",
    },
    {
      id: 3,
      title: "Honda Elevate",
      imageSrc: "/assets/images/Honda/Elevate.jpeg",
      description: "Rs 22-45 lakhs*",
      Link:"/Honda_Elevate",
    },
    {
      id: 4,
      title: "Honda ",
      imageSrc: "/assets/images/Honda/honda.jpeg",
      description: "Rs 33-40 lakhs*",
      Link:"/Honda_city",
    },
    
  ];
  const data1 = [
    {
      id: 1,
      title: "BMw",
      imageSrc: "/assets/images/logo/bmw.jpeg",
      description: "",
    },
    {
      id: 2,
      title: "Jeep",
      imageSrc: "/assets/images/Logo/jeep.jpg",
      description: "",
    },
    {
      id: 3,
      title: "HONDA",
      imageSrc: "/assets/images/Logo/honda.jpg",
      description: "",
    },
    {
      id: 4,
      title: "TATA",
      imageSrc: "/assets/images/Logo/Tata.jpg",
      description: "",
    },
    {
      id: 5,
      title: "MAHENDRA",
      imageSrc: "/assets/images/Logo/mahindra.jpg",
      description: "",
    },
    {
      id: 6,
      title: "MG",
      imageSrc: "/assets/images/Logo/mg.jpg",
      description: "",
    },
    {
      id: 7,
      title: "Kia",
      imageSrc: "/assets/images/Logo/kia.jpg",
      description: "",
    },
    {
      id: 8,
      title: "Toyota",
      imageSrc: "/assets/images/Logo/toyota.jpg",
      description: "",
    },
    {
      id: 9,
      title: "Renoult",
      imageSrc: "/assets/images/logo/renault.png",
      description: "",
    },
    {
      id: 10,
      title: "Mercedes ",
      imageSrc: "/assets/images/logo/mercedes-benz.jpeg",
      description: "",
    },
    {
      id: 11,
      title: "Audi ",
      imageSrc: "/assets/images/logo/audi.jpeg",
      description: "",
    },
  ];
  const sidedata = [
    {
      id: 1,
      title: "Land Rover Defender",
      imageSrc: "/assets/images/Landrover.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 2,
      title: "volvo",
      imageSrc: "/assets/images/volvo.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 3,
      title: "Mercedes Benz",
      imageSrc: "/assets/images/mercedes_benz.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 4,
      title: "BMW X7",
      imageSrc: "/assets/images/bmwx7.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 5,
      title: "Kia EV6",
      imageSrc: "/assets/images/kia.jpeg",
      description: "Rs.2cr-4cr",
    },
  ];

export default function HondaDetails() {
  return (
    <div className="border-2 flex  ">
    <div className=" p-4 m-6 ">
      {/* top text place */}
      <div className="border-2 ">
        <h1 className="text-3xl">Honda Car in 2024</h1>
        <p className="text-slate-500 p-2 ">
          There are a total of 13 Honda models currently on sale in Nepal.
          These include 3 Hatchbacks, 8 SUVs and 2 Sedans. Honda has 8
          upcoming car launches in Nepal - the Honda WR-V, Honda Elevate EV.
        </p>
      </div>
      <div className="flex flex-nowrap">
        <div className="flex w-full justify-around">
          <div className="w-full">
            <h1 className="text-3xl p-2">Honda Models</h1>{" "}
            {data.map((items) => {
              return (
                <div key={items.id} className="">
                  <ModelGrid
                    title={items.title}
                    description={items.description}
                    image={items.imageSrc}
                    link={items.Link}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <div className=" mt-6">
              <h1 className="text-bold">Popular Other Brand</h1>
              <div className="grid grid-cols-3  mt-2 border-2 ">
                {data1.map((items) => {
                  return (
                    <BrandGrid
                      key={items.id}
                      title={items.title}
                      description={items.description}
                      image={items.imageSrc}
                    />
                  );
                })}
              </div>
              <Link href={"/BrandDetails"} className="py-2 text-bold">
                View all car brand
              </Link>
            </div>
            <div className="border-2 p-4  mt-8 w-full ">
              <h1 className="text-bold ">Latest Luxury Suv cars</h1>
              <div>
                {sidedata.map((items) => {
                  return (
                    <div key={items.id} className="">
                      <Sidebar
                        title={items.title}
                        description={items.description}
                        image={items.imageSrc}
                      />
                    </div>
                  );
                })}
              </div>
              <Link href={"/LuxuryDetails"} className=" p-4">
                See all Luxury cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
