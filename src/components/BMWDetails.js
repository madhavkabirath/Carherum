"use client";
import React from "react";
import ModelGrid from "./ModelGrid";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
  {
    id: 1,
    title: "BMW Series 3",
    imageSrc: "/assets/images/BMW/3-series.jpeg",
    description: "Rs 20-40 lakhs*",
    Link:"/Series_3",
    
  },
  {
    id: 2,
    title: "BMW Series 7",
    imageSrc: "/assets/images/BMW/7-series.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/Series_7",
  },
  {
    id: 3,
    title: "BMW X7",
    imageSrc: "/assets/images/BMW/BMWx7.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_X7",
  },
  {
    id: 4,
    title: "BMW Z4",
    imageSrc: "/assets/images/BMW/BMWz4.jpeg",
    description: "Rs 33-40 lakhs*",
    Link:"/BMW_Z4",
  },
  {
    id: 5,
    title: "BMW i7",
    imageSrc: "/assets/images/BMW/i7.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_i7",
  },
  {
    id: 6,
    title: "BMW M2",
    imageSrc: "/assets/images/BMW/m2.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_M2",
  },
  {
    id: 7,
    title: "BMW X1",
    imageSrc: "/assets/images/BMW/x1.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_X1",
  },
  {
    id: 8,
    title: "BMW X3",
    imageSrc: "/assets/images/BMW/x3.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_X3",
  },
  {
    id: 9,
    title: "BMW X5",
    imageSrc: "/assets/images/BMW/x5.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_X5",
  },
  {
    id: 10,
    title: "BMW XM",
    imageSrc: "/assets/images/BMW/xm.jpeg",
    description: "Rs 22-45 lakhs*",
    Link:"/BMW_XM",
  },
];
const data1 = [
  {
    id: 1,
    title: "Hyundai",
    imageSrc: "/assets/images/logo/hyundai.jpg",
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
const sidedata1 = [
  {
    id: 1,
    title: "Hyundai",
    imageSrc: "/assets/images/Seden/Hyundaii20.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
  },
  {
    id: 2,
    title: "Maruti Alto",
    imageSrc: "/assets/images/seden/Marutialto.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
  },
  {
    id: 3,
    title: "Maruti Baleno",
    imageSrc: "/assets/images/seden/MarutiBaleno.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
  },
  {
    id: 4,
    title: "Maruti Swift",
    imageSrc: "/assets/images/seden/MarutiSwift.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
  },
  {
    id: 5,
    title: "MG-ev",
    imageSrc: "/assets/images/seden/MGev.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
  },
];

export default function BMWDetails() {
  return (
    <div className="border-2 flex  ">
      <div className=" p-4 m-6 ">
        {/* top text place */}
        <div className="border-2 ">
          <h1 className="text-3xl">BMW Car in 2024</h1>
          <p className="text-slate-500 p-2 ">
            There are a total of 20 BMW models currently on sale in Nepal. These
            include 7 Sedans, 8 SUVs, 4 Coupes and 1 Convertible. BMW has 4
            upcoming car launches in Nepal - the BMW M3, BMW 5 Series 2024, BMW
            X6, BMW i5.
          </p>
        </div>
        <div className="flex flex-nowrap">
          <div className="flex w-full justify-around">
            <div className="w-full">
              <h1 className="text-3xl p-2">BMW Models</h1>{" "}
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
              <div>
                <div className="border-2 p-4  mt-8 w-full">
                  <h1 className="text-bold ">Latest seden cars</h1>
                  <div>
                    {sidedata1.map((items) => {
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
                  <Link href={"/SedenDetails"} className="">
                    See all Seden cars
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
