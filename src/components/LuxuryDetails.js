import Card from "./Card";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
  {
    id: 1,
    title: "Audi Q5",
    imageSrc: "/assets/images/Luxury/audiQ5.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Audi",
  },
  {
    id: 2,
    title: "BMW X7",
    imageSrc: "/assets/images/Luxury/BMWx7.jpeg",
    description: "Rs 3-4 cr**",
    Link:"/BMW",
  },
  {
    id: 3,
    title: "Audi Q7",
    imageSrc: "/assets/images/Luxury/Audiq7.jpeg",
    description: "Rs 3-4 cr**",
    Link:"/Audi",
  },
  {
    id: 4,
    title: "BMW Z4",
    imageSrc: "/assets/images/Luxury/BMWz4.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/BMW",
  },
  {
    id: 5,
    title: "Jeep",
    imageSrc: "/assets/images/Luxury/Jeep.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Jeep",
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
    imageSrc: "/assets/images/Luxury/Landrover.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/LandRover",
  },
  {
    id: 8,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/Luxury/mercedesBenz.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Mercedes"
  },
  {
    id: 9,
    title: "Land Rover ",
    imageSrc: "/assets/images/Luxury/Landrover1.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/LandRover"
  },
  {
    id: 10,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/Luxury/mercedesbenz2.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Mercedes"
  },
  {
    id: 11,
    title: "Porsche",
    imageSrc: "/assets/images/Luxury/Porsche.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Mercedes"
  },
  {
    id: 12,
    title: "Volvo XC-90",
    imageSrc: "/assets/images/Luxury/Volvoxc90.jpeg",
    description: "Rs 3-4 cr*",
    Link:"/Volvo"
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

export default function LuxuryDetails() {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="-mb-8 -mt-20 overflow-hidden"
          src="/assets/images/TopBanner/TopBanner.jpeg"
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
            <h1 className="text-3xl">Best Luxury Car</h1>
            <p className="text-slate-500 p-2">
              The Best Luxury cars in Nepal include Land Rover (Rs. 3 cr),
              Hyundai Creta (Rs. 11 Lakh), Tata Nexon (Rs. 8.10 Lakh), Tata
              Punch (Rs. 6 Lakh), Maruti Brezza (Rs. 8.34 Lakh), & top brands
              are Mahindra, Hyundai, Tata, Maruti Suzuki.
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
          <div className="border-2 p-4  mt-8 w-full">
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
            <Link href={"/SedenDetails"} className="">
              See all Seden cars
            </Link>
          </div>
          <div className="border-2 p-4  mt-8 w-full ">
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
            <Link href={"/BrandDetails"} className="py-2 text-bold">
              View all car brand
            </Link>
          </div>
          <div className="border-2 p-4  mt-8 w-full">
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
            <Link href={"/SuvDetails"} className="text-bold">
              View all Suv cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
