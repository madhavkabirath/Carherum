"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Carousel from "./carousel";
import Link from "next/link";

const Brand = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "circle", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "circle", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const data = [
    {
      id: 1,
      title: "BMW",
      imageSrc: "/assets/images/logo/bmw.jpeg",
      description: "",
      Link:"/BMW",
    },
    {
      id: 2,
      title: "Jeep",
      imageSrc: "/assets/images/Logo/jeep.jpg",
      description: "",
      Link:"/Jeep",
    },
    {
      id: 3,
      title: "HONDA",
      imageSrc: "/assets/images/Logo/honda.jpg",
      description: "",
      Link:"/Honda",
    },
    {
      id: 4,
      title: "TATA",
      imageSrc: "/assets/images/Logo/Tata.jpg",
      description: "",
      Link:"/Tata"
    },
    {
      id: 5,
      title: "MAHINDRA",
      imageSrc: "/assets/images/Logo/mahindra.jpg",
      description: "",
      Link:"/Mahindra",
    },
    {
      id: 6,
      title: "MG",
      imageSrc: "/assets/images/Logo/mg.jpg",
      description: "",
      Link:"/MG",
    },
    {
      id: 7,
      title: "Kia",
      imageSrc: "/assets/images/Logo/kia.jpg",
      description: "",
      Link:"/Kia"
    },
    {
      id: 8,
      title: "Toyota",
      imageSrc: "/assets/images/Logo/toyota.jpg",
      description: "",
      Link:"/Toyota",
    },
    {
      id: 9,
      title: "Renault",
      imageSrc: "/assets/images/logo/renault.png",
      description: "",
      Link:"/Ranault"
    },
    {
      id: 10,
      title: "Mercedes ",
      imageSrc: "/assets/images/logo/mercedes-benz.jpeg",
      description: "",
      Link:"/Mercedes",
    },
    {
      id: 11,
      title: "Audi ",
      imageSrc: "/assets/images/logo/audi.jpeg",
      description: "",
      Link:"/Audi",
    },
    {
      id: 12,
      title: "Hyundai",
      imageSrc: "/assets/images/Logo/hyundai.jpg",
      description: "",
      Link:"/Hyundai"
    },
  ];
  return (
    <div className="p-6">
      <Box sx={{ width: "100%" }} className="p-2 border-2">
        <h1 className="text-2xl mx-4  text-bold">Popular Brand</h1>
        <Slider {...settings} className="">
          {data.map((items) => {
            return (
              <div key={items.id} className="px-4 shadow-lg">
                <Carousel
                  title={items.title}
                  description={items.description}
                  image={items.imageSrc}
                  link={items.Link}
                />
              </div>
            );
          })}
        </Slider>
        <Link href={"/BrandDetails"}>
          <h1 className="text-orange-500 mt-6 ">View all Brands</h1>
        </Link>
      </Box>
    </div>
  );
};
export default Brand;
