"use client";

import Grid from "./Grid";

import { useEffect, useRef } from "react";

export default function BrandDetails() {
  const data = [
    {
      id: 1,
      title: "BMW",
      imageSrc: "/assets/images/logo/bmw.jpeg",
      description: "",
      Link: "/BMW",
    },
    {
      id: 2,
      title: "Hyundai",
      imageSrc: "/assets/images/Logo/hyundai.jpg",
      description: "",
      Link: "/Hyundai",
    },
    {
      id: 3,
      title: "HONDA",
      imageSrc: "/assets/images/Logo/honda.jpg",
      description: "",
      Link: "/Honda",
    },
    {
      id: 4,
      title: "TATA",
      imageSrc: "/assets/images/Logo/Tata.jpg",
      description: "",
      Link: "/Tata",
    },
    {
      id: 5,
      title: "MAHINDRA",
      imageSrc: "/assets/images/Logo/mahindra.jpg",
      description: "",
      Link: "/Mahindra",
    },
    {
      id: 6,
      title: "MG",
      imageSrc: "/assets/images/Logo/mg.jpg",
      description: "",
      Link: "/MG",
    },
    {
      id: 7,
      title: "Kia",
      imageSrc: "/assets/images/Logo/kia.jpg",
      description: "",
      Link: "/Kia",
    },
    {
      id: 8,
      title: "Toyota",
      imageSrc: "/assets/images/Logo/toyota.jpg",
      description: "",
      Link: "/Toyota",
    },
    {
      id: 9,
      title: "Renoult",
      imageSrc: "/assets/images/logo/renault.png",
      description: "",
      Link: "/Renault",
    },
    {
      id: 10,
      title: "Mercedes ",
      imageSrc: "/assets/images/logo/mercedes-benz.jpeg",
      description: "",
      Link: "/Mercedes",
    },
    {
      id: 11,
      title: "Audi ",
      imageSrc: "/assets/images/logo/audi.jpeg",
      description: "",
      Link: "/Audi",
    },
    {
      id: 12,
      title: "Jeep",
      imageSrc: "/assets/images/Logo/jeep.jpg",
      description: "",
      Link: "/Jeep",
    },
    {
      id: 13,
      title: "Volvo",
      imageSrc: "/assets/images/Logo/volvo.jpeg",
      description: "",
      Link: "/Volvo",
    },
    {
      id: 14,
      title: "Tesla",
      imageSrc: "/assets/images/Logo/Tesla.jpeg",
      description: "",
      Link: "/Tesla",
    },
    {
      id: 15,
      title: "Land Rover",
      imageSrc: "/assets/images/Logo/land-rover.jpeg",
      description: "",
      Link: "/LandRover",
    },
    {
      id: 16,
      title: "BYD",
      imageSrc: "/assets/images/Logo/byd.jpeg",
      description: "",
      Link: "/BYD",
    },
    {
      id: 17,
      title: "Maruti",
      imageSrc: "/assets/images/Logo/maruti.jpg",
      description: "",
      Link: "/Maruti",
    },
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="overflow-hidden scroll-my-6 ">
      <div className="relative overflow-hidden">
        <img
          className="-mb-8 -mt-20 overflow-hidden"
          src="/assets/images/TopBanner/ElectrictopBanner.jpeg"
        />
        <div className="absolute rounded-full bg-red-700 h-[80vh] w-[43vw] opacity-70 -top-[10%] left-[10%] "></div>
        <h1 className="absolute top-[50%] left-[15%] text-4xl text-white">
          Buying your New Car?
          <br /> Check out!
        </h1>
      </div>
      <div className="border-2 flex flex-nowrap ">
        <div className=" p-4 m-6">
          <div className="border-2 " ref={scrollRef}>
            <h1 className="text-3xl">New car in 2024</h1>
            <p className="text-slate-500 p-2 ">
              CarHerum brings a complete range of new cars in 2024 in Nepal with
              prices. You can search cars by applying filters such as by price,
              by bodytype, by brand, by seating capacity & more. Also, stay
              updated with upcoming cars, electric cars in Nepal, compare cars
              in your price range and stay tuned to the latest car news
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 border-1 my-2 mt-8 ">
            {data.map((items) => {
              return (
                <div key={items.id} className="">
                  <Grid
                    title={items.title}
                    description={items.description}
                    image={items.imageSrc}
                    link={items.Link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
