"use client";
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Venue_Nimages() {
  const [value, setValue] = useState(0);
  const scrollRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Scroll to the top when tab changes
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="m-12" ref={scrollRef}>
      <Box sx={{ width: "100%", position: "fixed", top: 0, left: 100 }}>
        <h1 className="bg-white py-2 flex ">
          <Link href={"/Hyundai_Venue-N"}>
            <IoArrowBackSharp className="mx-2 text-2xl" />{" "}
          </Link>
          Hyundai Venue N{" "}
        </h1>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="bg-white"
        >
          <Tab label="Exterior" {...a11yProps(0)} />
          <Tab label="Interior" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="mx-20 px-8  ">
          <Link href="/">
            <img
              className="rounded-lg my-2"
              src="assets/images/hyundai/i20/front-left.jpeg"
            />
            <img
              className="rounded-lg my-2"
              src="assets/images/hyundai/i20/door-handle.jpeg"
            />
            <img
              className="rounded-lg my-2"
              src="assets/images/hyundai/i20/grille.jpeg"
            />
            <img
              className="rounded-lg my-2"
              src="assets/images/hyundai/i20/headlight.jpeg"
            />
            <img
              className="rounded-lg my-2"
              src="assets/images/hyundai/i20/side-mirror.jpeg"
            />
            <img
              className="rounded-lg my-2"
              src="assets/images/hyundai/i20/wheel.jpeg"
            />
          </Link>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="mx-20 px-8" ref={scrollRef}>
          <img
            className="rounded-lg my-2"
            src="assets/images/hyundai/i20/dashboard1.jpeg"
          />
          <img
            className="rounded-lg my-2"
            src="assets/images/hyundai/i20/airbags.jpeg"
          />
          <img
            className="rounded-lg my-2"
            src="assets/images/hyundai/i20/gear.jpeg"
          />
          <img
            className="rounded-lg my-2"
            src="assets/images/hyundai/i20/instrument.jpeg"
          />
          <img
            className="rounded-lg my-2"
            src="assets/images/hyundai/i20/sun-roof.jpeg"
          />
        </div>
      </CustomTabPanel>
    </div>
  );
}
