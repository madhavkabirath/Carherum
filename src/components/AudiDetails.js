"use client";
import React from "react";
import ModelGrid from "./ModelGrid";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
  {
    id: 1,
    title: "Audi A6",
    imageSrc: "/assets/images/Audi/A6.jpeg",
    description: "Rs 2-3 cr*",
    Link:"/Audi_A6",
  },
  {
    id: 2,
    title: "Audi A8",
    imageSrc: "/assets/images/Audi/A8-l.jpeg",
    description: "Rs 2-3 cr*",
    Link:"/Audi_A8",
  },
  {
    id: 3,
    title: "Audi A4",
    imageSrc: "/assets/images/Audi/audi-a4.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_A4",
  },
  {
    id: 4,
    title: "Audi Q5",
    imageSrc: "/assets/images/Audi/audiQ5.jpeg",
    description: "Rs 33-40 lakhs*",
    Link:"/Audi_Q5",
  },
  {
    id: 5,
    title: "Audi Q7",
    imageSrc: "/assets/images/Audi/Audiq7.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_Q7",
  },
  {
    id: 6,
    title: "Audi Q3",
    imageSrc: "/assets/images/Audi/Q3.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_Q3",
  },
  {
    id: 7,
    title: "Audi Q8",
    imageSrc: "/assets/images/Audi/Q8.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_Q8",
  },
  {
    id: 8,
    title: "Audi RS5",
    imageSrc: "/assets/images/Audi/Rs5.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_RS5",
  },
  {
    id: 9,
    title: "Audi E-tron",
    imageSrc: "/assets/images/Audi/e-tron.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_E-tron",
  },
  {
    id: 10,
    title: "Audi GT",
    imageSrc: "/assets/images/Audi/e-tron-gt.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Audi_GT",
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

export default function AudiDetails() {
  return (
    <div className="border-2 flex  ">
      <div className=" p-4 m-6 ">
        {/* top text place */}
        <div className="border-2 ">
          <h1 className="text-3xl">Audi Car in 2024</h1>
          <p className="text-slate-500 p-2 ">
            There are a total of 16 Audi models currently on sale in Nepal.
            These include 8 SUVs, 4 Sedans and 4 Coupes. Audi has 2 upcoming car
            launches in Nepal - the Audi Q8 2024, Audi A3 2024.
          </p>
        </div>
        <div className="flex flex-nowrap">
          <div className="flex w-full justify-around">
            <div className="w-full">
              <h1 className="text-3xl p-2">Audi Models</h1>{" "}
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
