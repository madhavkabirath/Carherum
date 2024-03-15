import * as React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchCarousel from "./SearchCarousel";


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
    imageSrc: "/assets/images/bmw.jpeg",
    description: "",
    Link: "/BMW",
  },
  {
    id: 2,
    title: "BYD",
    imageSrc: "/assets/images/byd.jpeg",
    description: "",
    Link: "/BYD",
  },
  {
    id: 3,
    title: "Mercedes",
    imageSrc: "/assets/images/mercedes_benz.jpeg",
    description: "",
    Link: "/Mercedes",
  },
  {
    id: 4,
    title: "LandRover",
    imageSrc: "/assets/images/Landrover.jpeg",
    description: "",
    Link:"/LandRover",
  },
  {
    id: 5,
    title: "MAHINDRA",
    imageSrc: "/assets/images/mahendra.jpeg",
    description: "",
    Link:"/Mahindra",

  },
  {
    id: 6,
    title: "TESLA",
    imageSrc: "/assets/images/tesla.jpeg",
    description: "",
    Link:"/Tesla",
  },
];

const data1 = [
  {
    id: 1,
    title: "Hyundai verma",
    imageSrc: "/assets/images/seden.jpeg",
    description: "",
    Link:"/Hyundai",
  },
  {
    id: 2,
    title: "Maruti desire",
    imageSrc: "/assets/images/seden1.jpeg",
    description: "",
    Link:"/Maruti",
  },
  {
    id: 3,
    title: "Honda city",
    imageSrc: "/assets/images/seden2.jpeg",
    description: "",
    Link:"/Honda",
  },
  {
    id: 4,
    title: "Hyundai Aura",
    imageSrc: "/assets/images/seden3.jpeg",
    description: "",
    Link:"/Hyundai",
  },
  {
    id: 5,
    title: "volkswagen virtus",
    imageSrc: "/assets/images/seden4.jpeg",
    description: "",
    Link:"/Volvo",
  },
  {
    id: 6,
    title: "Honda Amaze",
    imageSrc: "/assets/images/seden5.jpeg",
    description: "",
    Link:"/Honda",
  },
];

const data2 = [
  {
    id: 1,
    title: "Land Rover Defender",
    imageSrc: "/assets/images/Landrover.jpeg",
    description: "",
    Link:"/LandRover",
  },
  {
    id: 2,
    title: "volvo",
    imageSrc: "/assets/images/volvo.jpeg",
    description: "",
    Link:"/Volvo",
  },
  {
    id: 3,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/mercedes_benz.jpeg",
    description: "",
    Link:"/Mercedes",
  },
  {
    id: 4,
    title: "BMW X7",
    imageSrc: "/assets/images/bmwx7.jpeg",
    description: "",
    Link:"/BMW",
  },
  {
    id: 5,
    title: "Kia EV6",
    imageSrc: "/assets/images/kia.jpeg",
    description: "",
    Link:"/Kia",
  },
  {
    id: 6,
    title: "Jeep Wrangler",
    imageSrc: "/assets/images/wrangler.jpeg",
    description: "",
    Link:"/Jeep",
  },
];

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-6">
      <Box sx={{ width: "100%" }} className=" p-2 border-2">
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="border-emerald-50 p-5"
        >
          <div className="text-2xl text-bold mx-2 my-2">
            <h1>Most Recommended Cars for You</h1>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="New Car" {...a11yProps(0)} />
            <Tab label="Used Car" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Slider {...settings}>
            {data.map((items) => {
              return (
                <div key={items.id} className="px-2">
                  <SearchCarousel
                    title={items.title}
                    description={items.description}
                    image={items.imageSrc}
                    link={items.Link}
                  />
                </div>
              );
            })}
          </Slider>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Slider {...settings}>
            {data1.map((items) => {
              return (
                <div key={items.id} className="px-2 ">
                  <SearchCarousel
                    title={items.title}
                    description={items.description}
                    image={items.imageSrc}
                    link={items.Link}
                  />
                </div>
              );
            })}
          </Slider>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
