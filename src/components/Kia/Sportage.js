"use client";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import RecommendPage from "@/app/Recommend/page";

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

export default function Sportage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="flex flex-row bg-white py-2 ">
        <div className="w-[50%] h-[50%] ">
          <Link href={"Grandi10images"}>
            <img
              className="rounded-md w-[60%] h-[50%] px-4"
              src="/assets/images/Kia/Sportage.jpeg"
            ></img>
          </Link>
        </div>
        <div className="mt-4 -mx-6">
          <h1 className="text-black-500">Kia Sportage</h1>
          <p className="text-orange-500">
            ⭐️⭐️⭐️⭐️
            <br />
            Price Rs. 2-3 cr**
          </p>
          <button className="text-white bg-orange-600 rounded-md py-2 px-12 mt-3">
            Buy Car
          </button>
        </div>
      </div>
      <div className="p-6 m-4 bg-slate-200  ">
        <h1 className="text-2xl">Key Specs of Kia Sportage</h1>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="KEY SPECIFICATION" {...a11yProps(0)} />
              <Tab label="TOP FEATURES" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Table hideHeader aria-label="Example static collection table">
              <TableHeader>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Engine</TableCell>
                  <TableCell>2998cc</TableCell>
                  <TableCell>Power</TableCell>
                  <TableCell>368.78 bhp</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Torque</TableCell>
                  <TableCell>500Nm</TableCell>
                  <TableCell>Transmission</TableCell>
                  <TableCell>Automatic</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Top Speed</TableCell>
                  <TableCell>253Kmph</TableCell>
                  <TableCell>Drive Type</TableCell>
                  <TableCell>4WD</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Table hideHeader aria-label="Example static collection table">
              <TableHeader>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Heads Up Display</TableCell>
                  <TableCell>✔</TableCell>
                  <TableCell>Automatic Climate Control</TableCell>
                  <TableCell>✔</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Height Adjustable Driver Seat</TableCell>
                  <TableCell>✔</TableCell>
                  <TableCell>Adjustable Headrest</TableCell>
                  <TableCell>✔</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CustomTabPanel>
        </Box>
        <button className="text-blue-500">See all Specification</button>
      </div>

      <div className="p-6 m-4 bg-slate-100 shadow-md border-2 rounded-md">
        <h1 className="text-2xl text-bold">
          Kia Car Latest Update
        </h1>
        <p className="py-2">
          {isExpanded ? (
            <>
              <strong className="text-slate-600">Latest Update:</strong> Kia
              has launched the facelifted M340i in Nepal. It now gets a crisper
              look and an updated cabin with new displays.
              <br />
              <strong className="text-slate-600">Price:</strong> The facelifted
              M340i is priced at Rs 69.20 lakh (ex-showroom).
              <br />
              <strong className="text-slate-600">
                Engine and Transmission:
              </strong>{" "}
              Propulsion duties are carried out by a 3-litre straight-six
              turbo-petrol engine (making 387PS and 500Nm) paired with an
              eight-speed automatic transmission only. The sedan is capable of
              doing the 0-100kmph sprint in 4.4 seconds.
              <br />
              <strong className="text-slate-600">Features:</strong> It now gets
              an updated cabin which includes a 14.9-inch curved touchscreen
              infotainment display, a 12.4-inch digital driver's display, a
              heads-up display, voice controls, wireless phone charging,
              three-zone climate control, glass sunroof and ambient lighting.
              <br />
              <strong className="text-slate-600">Safety:</strong> In terms of
              passenger safety, it gets six airbags, ABS with EBS, dynamic
              stability control (DSC), tyre pressure monitoring system (TPMS),
              runflat tyres and ISOFIX anchors.
              <br />
              <strong className="text-slate-600">Rivals:</strong> It continues
              to compete against the Mercedes-Benz C Class, Jaguar XE, Volvo S60
              and Audi A4.
            </>
          ) : (
            <>
              <strong className="text-slate-600">Latest Update:</strong> BMW has
              launched the facelifted M340i in Nepal. It now gets a crisper look
              and an updated cabin with new displays.
              <br />
              <strong className="text-slate-600">Price:</strong> The facelifted
              M340i is priced at Rs 2-3 cr** (ex-showroom).
            </>
          )}
        </p>
        <div className="flex">
          {isExpanded ? (
            <button className="text-blue-500" onClick={toggleExpanded}>
              View Less
            </button>
          ) : (
            <button className="text-blue-500" onClick={toggleExpanded}>
              Read More
            </button>
          )}
          {isExpanded ? (
            <FaAngleUp className="text-blue-500 my-2 mx-2" />
          ) : (
            <FaAngleDown className="text-blue-500 my-2 mx-2" />
          )}
        </div>
      </div>
    </div>
  );
}
