"use client";
import React from "react";
import ModelGrid from "./ModelGrid";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
  {
    id: 1,
    title: "Toyota Belta",
    imageSrc: "/assets/images/toyota/Belta.jpeg",
    description: "Rs 20-40 lakhs*",
    Link:"/Toyota_Belta",
  },
  {
    id: 2,
    title: "Toyota Camry",
    imageSrc: "/assets/images/toyota/Camry.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Toyota_Camry",
  },
  {
    id: 3,
    title: "Toyota Fortuner Lengender",
    imageSrc: "/assets/images/toyota/Fortuner-Lengender.jpeg",
    description: "Rs 1.5-2 cr*",
    Link:"/Toyota_Fortuner_Lengender",
  },
  {
    id: 4,
    title: "Toyota Fortuner",
    imageSrc: "/assets/images/toyota/Fortuner.jpeg",
    description: "Rs 1-1.5 cr*",
    Link:"/Toyota_Fortuner",
  },
  {
    id: 5,
    title: "Toyota Glanza",
    imageSrc: "/assets/images/toyota/Glanza.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Toyota_Glanza",
  },
  {
    id: 6,
    title: "Toyota Hilux",
    imageSrc: "/assets/images/toyota/Hilux.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Toyota_Hilux",
  },
  {
    id: 7,
    title: "Toyota Innova",
    imageSrc: "/assets/images/toyota/Innova.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Toyota_Innova",
  },
];
const data1 = [
  {
    id: 1,
    title: "BMW",
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
    title: "Hyundai",
    imageSrc: "/assets/images/Logo/hyundai.jpg",
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

export default function ToyotaDetails() {
  return (
    <div className="border-2 flex  ">
      <div className=" p-4 m-6 ">
        {/* top text place */}
        <div className="border-2 ">
          <h1 className="text-3xl">Toyota Car in 2024</h1>
          <p className="text-slate-500 p-2 ">
            There are a total of 11 Toyota models currently on sale in Nepal.
            These include 1 Hatchback, 3 MUVs, 4 SUVs, 1 Pickup Truck, 1 Sedan
            and 1 Minivan. Toyota has 3 upcoming car launches in Nepal - the
            Toyota Land Cruiser 250, Toyota Belta, Toyota Camry 2024.
          </p>
        </div>
        <div className="flex flex-nowrap">
          <div className="flex w-full justify-around">
            <div className="w-full">
              <h1 className="text-3xl p-2">Toyota Models</h1>{" "}
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
                <h1 className="text-bold">Other Popular Brand</h1>
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
  );
}
