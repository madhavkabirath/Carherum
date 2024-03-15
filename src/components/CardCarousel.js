"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import rightArrow from "../../public/assets/images/cardArrowRight.png";
import leftArrow from "../../public/assets/images/cardArrowleft.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={rightArrow}
      className={className}
      alt=""
      onClick={onClick}
      style={{
        ...style,
        width: "65px",
        height: "65px",
        marginTop: "",
        marginRight:""
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={leftArrow}
      className={className}
      alt=""
      onClick={onClick}
      style={{
        ...style,
        width: "30px",
        height: "30px",
        display: "absolute",
        marginTop: "8%",
        zIndex: 10,
        marginLeft: "20px",
        marginTop:""
      }}
    />
  );
}

export default function CarouselForCard({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
}
