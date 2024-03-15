"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

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

export default function HomeTopBanner() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className="h-[42rem]  ">
      <Tabs
        className="absolute  left-[40%] bottom-16  "
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Subscribe for Car" {...a11yProps(0)} />
        <Tab label="Hyundai creata " {...a11yProps(1)} />
        <Tab label="Tata punch" {...a11yProps(2)} />
        <Tab label="Personal loan" {...a11yProps(3)} />
      </Tabs>

      <form className="absolute top-[25%] w-[25rem] h-[27rem] left-[20%] transform -translate-x-1/2 bg-white rounded-md">
        <div className="mx-6 my-3">
          <h1 className="text-black text-3xl  px-2 py-3 mx-6 ">
            Find Your Right Car
          </h1>
          <div className="flex space-x-8 m-4 justify-center">
            <button
              type="button"
              className="border-2 bg-black border-neutral-950 bg-black-500 text-white py-3 px-3 rounded-md"
            >
              New Car
            </button>
            <button
              type="button"
              className="border-2 bg-black border-neutral-950 text-white py-3 px-3  rounded-md"
            >
              Used Car
            </button>
          </div>
          <div className="flex space-x-4 mb-4  text-black  justify-center">
            <label>
              <input type="radio" name="searchBy" value="budget"  />
              By Budget
            </label>
            <label>
              <input type="radio" name="searchBy" value="brand" />
              By Brand
            </label>
          </div>
          <div className="flex flex-col py-3  mx-3 mb-4 border-1">
            <input
              className="border rounded-md py-3"
              type="text"
              placeholder="Select Brand"
            />

            <input
              className="border rounded-md py-3"
              type="text"
              placeholder="Select Model"
            />
          </div>
          <button
            type="submit"
            className=" w-48  mx-20 py-3 mb-3 rounded-md justify-center bg-orange-600 "
          >
            Search
          </button>
        </div>
      </form>

      <div className="">
        <CustomTabPanel className=" w-[90.2rem] " value={value} index={0}>
          <img
            src="/assets/images/subscription.jpeg"
            alt="Subscription of the car"
            className="h-[40rem]"
          />
        </CustomTabPanel>

        <CustomTabPanel className="w-full" value={value} index={1}>
          <img
            className="h-[40rem]"
            src="./assets/images/Hyundai_creata.jpeg"
            alt="Hyundai creata 2024"
          />
        </CustomTabPanel>

        <CustomTabPanel className="w-full" value={value} index={2}>
          <img
            className="h-[40rem]"
            src="./assets/images/Tata_punch.jpeg"
            alt="Tata punch car 2024"
          />
        </CustomTabPanel>

        <CustomTabPanel className="w-full" value={value} index={3}>
          <img
            className="h-[40rem]"
            src="./assets/images/Personal_loan.jpeg"
            alt="Hyundai creata 2024"
          />
        </CustomTabPanel>
      </div>
    </div>
  );
}
