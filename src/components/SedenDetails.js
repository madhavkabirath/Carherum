import Card from "./Card";
import BrandGrid from "./BrandGrid";
import Link from "next/link";
import Sidebar from "./Sidebar";

const data = [
  {
    id: 1,
    title: "Hyundai",
    imageSrc: "/assets/images/Seden/Hyundaii20.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Hyundai",
  },
  {
    id: 2,
    title: "Maruti Alto",
    imageSrc: "/assets/images/seden/Marutialto.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Maruti",
  },
  {
    id: 3,
    title: "Maruti Baleno",
    imageSrc: "/assets/images/seden/MarutiBaleno.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Maruti",
  },
  {
    id: 4,
    title: "Maruti Swift",
    imageSrc: "/assets/images/seden/MarutiSwift.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Maruti",
  },
  {
    id: 5,
    title: "MG-ev",
    imageSrc: "/assets/images/seden/MGev.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/MG",
  },
  {
    id: 6,
    title: "Renault",
    imageSrc: "/assets/images/seden/Ranault.jpeg",
    description: "Rs11 - 17.20 cr*",
    Link:"/Renault",
  },
  {
    id: 7,
    title: "Maruti Wagon",
    imageSrc: "/assets/images/Seden/MarutiWagon.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Maruti",
  },
  {
    id: 8,
    title: "Tata Tiago",
    imageSrc: "/assets/images/Seden/tatatiago.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Tata",
  },
  {
    id: 9,
    title: "Maruti ",
    imageSrc: "/assets/images/Seden/seden1.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Maruti",
  },
  {
    id: 10,
    title: "Honda",
    imageSrc: "/assets/images/Seden/seden.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Honda",
  },
  {
    id: 11,
    title: "Honda City",
    imageSrc: "/assets/images/Seden/seden2.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Honda",
  },
  {
    id: 12,
    title: "Honda",
    imageSrc: "/assets/images/Seden/seden3.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Honda",
  },
  {
    id: 13,
    title: "Honda Amaze",
    imageSrc: "/assets/images/Seden/seden5.jpeg",
    description: "Rs11.25 - 17.20 Lakh*",
    Link:"/Honda",
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

export default function SedenDetails() {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="-mb-8 -mt-20 overflow-hidden"
          src="/assets/images/TopBanner/TopBanner2.jpeg"
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
            <h1 className="text-3xl">Best Seden Cars </h1>
            <p className="text-slate-500 p-2">
              The Best Sedan cars in Nepal include Hyundai Verna (Rs. 11 Lakh),
              Maruti Dzire (Rs. 6.57 Lakh), Honda City (Rs. 11.71 Lakh), Hyundai
              Aura (Rs. 6.49 Lakh), Volkswagen Virtus (Rs. 11.56 Lakh), & top
              brands are Hyundai, Maruti Suzuki, Honda, Volkswagen.<br></br> Explore the
              list of top Sedan cars & check the price in your city, latest
              offers, variants, specifications, pictures, mileage and reviews.
              Select your desired new car model
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
          <div className=" border-2 p-4  mt-8 w-full ">
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
            <Link href={"/BrandDetails"} className="text-bold">
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
