import * as React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchCarousel from "./SearchCarousel";
import Link from "next/link";

//custome Tab function
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

//React Slick functon with custome arrow
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

//data passed
const data = [
  {
    id: 1,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/Electric/mercedes_benz.jpeg",
    description: "",
    Link:"/Mercedes",
  },
  {
    id: 2,
    title: "MG E4",
    imageSrc: "/assets/images/Electric/Mg.jpeg",
    description: "",
    Link:"/MG",
  },
  {
    id: 3,
    title: "MG comet",
    imageSrc: "/assets/images/Electric/MGcomet.jpeg",
    description: "",
    Link:"/MG",
  },
  {
    id: 4,
    title: "Tata Nexon Ev",
    imageSrc: "/assets/images/Electric/TataNexonEV.jpeg",
    description: "",
    Link:"/MG",
  },
  {
    id: 5,
    title: "Tata Punch EV",
    imageSrc: "/assets/images/Electric/TataPunch.jpeg",
    description: "",
    Link:"/Volvo",
  },
];

const data1 = [
  {
    id: 1,
    title: "Rolls Royce",
    imageSrc: "/assets/images/Electric/RollsRoyce.jpeg",
    description: "",
    Link:"/LandRover",
  },
  {
    id: 2,
    title: "Tata Curvy",
    imageSrc: "/assets/images/Electric/TataCurvy.jpeg",
    description: "",
    Link:"/Tata",
  },
  {
    id: 3,
    title: "Tata Nexon",
    imageSrc: "/assets/images/Electric/TataNexon.jpeg",
    description: "",
    Link:"/Tata",
  },
  {
    id: 4,
    title: "Tata Punch",
    imageSrc: "/assets/images/Electric/TataPunch.jpeg",
    description: "",
    Link:"/Tata",
  },
  {
    id: 5,
    title: "Tata Tiago EV",
    imageSrc: "/assets/images/Electric/TatatiagoEV.jpeg",
    description: "",
    Link:"/LandRover",
  },
];

const data2 = [
  {
    id: 1,
    title: "Tata Curvy",
    imageSrc: "/assets/images/Electric/TataCurvy.jpeg",
    description: "",
    Link:"/Tata",
  },
  {
    id: 2,
    title: "Volvo",
    imageSrc: "/assets/images/Electric/volvoex.jpeg",
    description: "",
    Link:"/Volvo",
  },
  {
    id: 3,
    title: "Mercedes Benz",
    imageSrc: "/assets/images/Electric/mercedes_benz.jpeg",
    description: "",
    Link:"/Mercedes",
  },
  {
    id: 4,
    title: "Rolls Royce",
    imageSrc: "/assets/images/Electric/RollsRoyce.jpeg",
    description: "",
    Link:"/LandRover",
  },

  {
    id: 5,
    title: "Kia EV6",
    imageSrc: "/assets/images/kia.jpeg",
    description: "",
    Link:"/Kia",
  },
];

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-6">
      <Box sx={{ width: "100%" }} className="p-2 border-2 ">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className=" ">
          <div className="text-2xl text-bold mx-2 my-2">
            <h1>Electric Car</h1>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Popular" {...a11yProps(0)} />
            <Tab label="Upcoming" {...a11yProps(1)} />
            <Tab label="Latest" {...a11yProps(2)} />
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
          <Link href={"/ElectricPopular"}>
            <h1 className="text-orange-500 mt-6 ">See all Electric cars</h1>
          </Link>
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
          <Link href={"/ElectricPopular"}>
            <h1 className="text-orange-500 mt-6 ">See all Electric cars</h1>
          </Link>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Slider {...settings}>
            {data2.map((items) => {
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
          <Link href={"/ElectricPopular"}>
            <h1 className="text-orange-500 mt-6 ">See all Electric cars</h1>
          </Link>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
