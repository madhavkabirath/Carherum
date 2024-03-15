import Card from "./Card";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Suvdetails() {
  const data = [
    {
      id: 1,
      title: "BMW",
      imageSrc: "/assets/images/bmw.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/BMW",
    },
    {
      id: 2,
      title: "BYD",
      imageSrc: "/assets/images/byd.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/BYD",
    },
    {
      id: 3,
      title: "HONDA",
      imageSrc: "/assets/images/car1.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Honda",
    },
    {
      id: 4,
      title: "TATA",
      imageSrc: "/assets/images/tata.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Tata",
    },
    {
      id: 5,
      title: "MAHINDRA",
      imageSrc: "/assets/images/mahendra.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Mahindra",
    },
    {
      id: 6,
      title: "TESLA",
      imageSrc: "/assets/images/tesla.jpeg",
      description: "Rs11 - 17.20 cr*",
      Link:"/Tesla",
    },
    {
      id: 7,
      title: "Fortuner",
      imageSrc: "/assets/images/Suv/Fortuner.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Toyota",
    },
    {
      id: 8,
      title: "Hyundai Suv",
      imageSrc: "/assets/images/Suv/hyundaiSuv.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Hyundai",
    },
    {
      id: 9,
      title: "Land Roveer",
      imageSrc: "/assets/images/Suv/landrover.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/LandRover",
    },
    {
      id: 10,
      title: "Mahindra Suv",
      imageSrc: "/assets/images/Suv/Mahindrasuv.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Mahindra",
    },
    {
      id: 11,
      title: "Scorpio",
      imageSrc: "/assets/images/Suv/Scorpio.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Mahindra",
    },
    {
      id: 12,
      title: "Scorpio",
      imageSrc: "/assets/images/Suv/Scorpio1.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Mahindra",
    },
    {
      id: 13,
      title: "Thar",
      imageSrc: "/assets/images/Suv/Thar.jpeg",
      description: "Rs11.25 - 17.20 Lakh*",
      Link:"/Mahindra",
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
      title: "MAHINDRA",
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
      title: "Renault",
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
      title: "BMW",
      imageSrc: "/assets/images/logo/bmw.jpeg",
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
      title: "Hyundai verma",
      imageSrc: "/assets/images/seden.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 2,
      title: "Maruti desire",
      imageSrc: "/assets/images/seden1.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 3,
      title: "Honda city",
      imageSrc: "/assets/images/seden2.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 4,
      title: "Hyundai Aura",
      imageSrc: "/assets/images/seden3.jpeg",
      description: "Rs.2cr-4cr",
    },
    {
      id: 5,
      title: "volkswagen virtus",
      imageSrc: "/assets/images/seden4.jpeg",
      description: "Rs.2cr-4cr",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="-mb-8 -mt-20 overflow-hidden"
          src="/assets/images/TopBanner/TopBanner.jpeg"
        />
        <div className="absolute rounded-full bg-orange-800 h-[80vh] w-[43vw] opacity-80 -top-[10%] left-[10%] "></div>
        <h1 className="absolute top-[50%] left-[15%] text-4xl text-white">
          What is trending? Check out
          <br /> most trending Cars.
        </h1>
      </div>
      <div className="border-2 flex flex-nowrap ">
        <div className=" p-4 m-6">
          <div className="border-2">
            <h1 className="text-3xl">Best Suv Cars </h1>
            <p className="text-slate-500 p-2">
              The Best Suv cars in India include Mahindra Thar (Rs. 11.25 Lakh),
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
          <div className="border-2 p-2 w-full ">
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
            <Link href={"/LuxuryDetails"} className="">
              See all Luxury cars
            </Link>
          </div>
          <div className="border-2 p-4  mt-8 w-full">
            <h1 className="text-bold">Upcoming Seden cars</h1>
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
            <Link href={"/SedenDetails"} className=" text-bold">
              View all Seden cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
