import Card from "./Card";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
  {
    id: 1,
    title: "Hyundai Kona EV",
    imageSrc: "/assets/images/Electric/Hyundaikona.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Hyundai",
  },
  {
    id: 2,
    title: "Kia EV5",
    imageSrc: "/assets/images/Electric/KiaEv5.jpeg",
    description: "Rs 3-4 cr**",
    Link:"/Kia",
  },
  {
    id: 3,
    title: "Kia EV 6",
    imageSrc: "/assets/images/Electric/KiaEv6.jpeg",
    description: "Rs 3-4 cr**",
    Link:"/Kia",
  },
  {
    id: 4,
    title: "Tata Curvy",
    imageSrc: "/assets/images/Electric/TataCurvy.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Tata",
  },
  {
    id: 5,
    title: "Tata Punch",
    imageSrc: "/assets/images/Electric/TataPunchEV.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Tata",
  },
  {
    id: 6,
    title: "Kia Ev-6",
    imageSrc: "/assets/images/Luxury/kiaev6.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Kia",
  },
  {
    id: 7,
    title: "Landrover",
    imageSrc: "/assets/images/Electric.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/LandRover",
  },
  {
    id: 8,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/Luxury/mercedesBenz.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Mercedes",
  },
  {
    id: 9,
    title: "Land Rover ",
    imageSrc: "/assets/images/Luxury/Landrover1.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/LandRover",
  },
  {
    id: 10,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/Luxury/mercedesbenz2.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Mercedes",
  },
  {
    id: 11,
    title: "MG comet",
    imageSrc: "/assets/images/MG/MGcomet.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Mercedes",
  },
  {
    id: 12,
    title: "Volvo XC-90",
    imageSrc: "/assets/images/Luxury/Volvoxc90.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Volvo",
  },
  {
    id: 13,
    title: "Honda Amaze",
    imageSrc: "/assets/images/Luxury/Audiq7.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Honda"
  },
];
const data1 = [
  {
    id: 1,
    title: "Hyundai",
    imageSrc: "/assets/images/Logo/hyundai.jpg",
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
  {
    id: 12,
    title: "BMw",
    imageSrc: "/assets/images/logo/bmw.jpeg",
    description: "",
  },
];
const sidedata = [
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
const sidedata1 = [
  {
    id: 1,
    title: "BMW",
    imageSrc: "/assets/images/bmw.jpeg",
    description: "Rs.2cr-4cr",
  },
  {
    id: 2,
    title: "BYD",
    imageSrc: "/assets/images/byd.jpeg",
    description: "Rs.2cr-4cr",
  },
  {
    id: 3,
    title: "HONDA",
    imageSrc: "/assets/images/car1.jpeg",
    description: "Rs.2cr-4cr",
  },
  {
    id: 4,
    title: "TATA",
    imageSrc: "/assets/images/tata.jpeg",
    description: "Rs.2cr-4cr",
  },
  {
    id: 5,
    title: "MAHENDRA",
    imageSrc: "/assets/images/mahendra.jpeg",
    description: "Rs.2cr-4cr",
  },
];

export default function ElectricPopular() {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="-mb-8 -mt-20 overflow-hidden"
          src="/assets/images/TopBanner/ElectrictopBanner.jpeg"
        />
        <div className="absolute rounded-full bg-red-700 h-[80vh] w-[43vw] opacity-70 -top-[10%] left-[10%] "></div>
        <h1 className="absolute top-[50%] left-[15%] text-4xl text-white">
          What is trending? Check out
          <br /> most trending Cars.
        </h1>
      </div>
      <div className="border-2 flex flex-nowrap ">
        <div className=" p-4 m-6">
          <div className="border-2">
            <h1 className="text-3xl">Electric Car in Nepal</h1>
            <p className="text-slate-500 p-2">
              There are 37 Electric cars currently available for sale at
              starting price Rs 4.50 Lakh. The most popular Electric cars are
              Tata Punch EV (Rs. 10.99 - 15.49 Lakh), MG Comet EV (Rs. 6.99 -
              8.58 Lakh), Tata Nexon EV (Rs. 14.74 - 19.99 Lakh). 
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 border-1 my-2 mt-8 ">
            {data.map((items) => {
              return (
                <div key={items.id} className="">
                  <Card
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
        <div>
          <div className="border-2 p-6 mx-8 mt-2 my-2  ">
            <h1 className="text-bold ">Latest seden cars</h1>
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
            <Link href={"/SedenDetails"} className=" border-2 ">
              See all Seden cars
            </Link>
          </div>
          <div className="border-2 p-4‰ mx-8 my-8 ">
            <h1 className="text-bold">Popular cars by Brand</h1>
            <div className="grid grid-cols-3 gap-4 mt-2 border-2 ">
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
            <Link href={""} className="py-2 text-bold">
              View all car brand
            </Link>
          </div>
          <div className="border-2 p-6 mx-8">
            <h1 className="text-bold">Upcoming Suv cars</h1>
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
            <Link href={"/SuvDetails"} className="py-2 text-bold">
              View all Suv cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
