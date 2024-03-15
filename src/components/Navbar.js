"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoPerson, IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewCarDropdown, setShowNewCarDropdown] = useState(false);
  const [showBuySellDropdown, setShowBuySellDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const router = useRouter();
  
  const handleRouteChange = ()=>{
    router.push(`${searchQuery}`)
  }
  
  //search handle
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  const handleNewCarHover = () => {
    setShowNewCarDropdown(true);
    setShowBuySellDropdown(false);
    setShowNewsDropdown(false); //close the other dropdown
  };

  const handleBuySellHover = () => {
    setShowBuySellDropdown(true);
    setShowNewCarDropdown(false);
    setShowNewsDropdown(false); // Close the other dropdown
  };
  const handleNewsHover = () => {
    setShowBuySellDropdown(false);
    setShowNewCarDropdown(false);
    setShowNewsDropdown(true); // Close the other dropdown
  };

  const handleNewCarLeave = () => {
    setShowNewCarDropdown(false);
  };

  const handleBuySellLeave = () => {
    setShowBuySellDropdown(false);
  };
  const handleNewsLeave = () => {
    setShowNewsDropdown(false);
  };

  return (
    <nav className="  bg-white text-black p-4 top-0 left-0 right-0 md:fill-none border-2 ">
      <div className="bg-white text-black py-2 flex justify-between  top-0 left-0 right-0 md:fill-none">
        <Link href="/">
          <img
            className="h-15 rounded-full w-20 "
            src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg"
          ></img>
        </Link>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Car eg.. Honda"
            className="flex w-96 px-2 py-2 rounded-l-lg border bg-slate-100 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-900"
          />

          <button
            type="submit"
            className="px-5 py-2.5  rounded-r-lg bg-black border border-gray-300 cursor-pointer"
            onClick={handleRouteChange}
          >
            <IoSearchSharp className="text-white rounded-lg size-6" />
          </button>
        </form>
        <div className="flex items-center mx-2 ">
          <Link href="/login">
            <IoPerson />
          </Link>
          <Link href="/login">
            <p className="px-2 py-2 rounded-md  hover:bg-slate-200">Log In</p>
          </Link>
          <Link href="/signup">
            <p className="px-2 py-2 rounded-md  hover:bg-slate-200 ml-2">
              Sign Up
            </p>
          </Link>
        </div>
      </div>

      <hr />
      <div>
        <div className="flex gap-5 ">
          <div className="relative" onMouseLeave={handleNewCarLeave}>
            <div className="flex flex-row" onMouseOver={handleNewCarHover}>
              <p className="mx-2">New Car</p>
              <IoMdArrowDropdown className="my-1.5 -mx-2" />
            </div>
            {showNewCarDropdown && (
              <ul className="absolute z-50 bg-white w-[10rem] border-y-2">
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={"/SuvDetails"}>Explore new cars</Link>
         ƒ       </li>
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={"/ElectricPopular"}>Electric Car</Link>
                </li>
                <li className="text-gray-500  mx-3  text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={"/SedenDetails"}>Popular car</Link>
                </li>
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={"/LuxuryDetails"}>Upcoming car</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative" onMouseLeave={handleBuySellLeave}>
            <div className="flex flex-row" onMouseOver={handleBuySellHover}>
              <p className="mx-2">Buy and sell Used car</p>
              <IoMdArrowDropdown className="my-1.5 -mx-2" />
            </div>
            {showBuySellDropdown && (
              <ul className="absolute z-50 bg-white w-[10rem] border-y-2">
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={""}>Buy Used car</Link>
                </li>
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={""}>Sale Car</Link>
                </li>
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link
                    href={
                      "https://www.nepalbank.com.np/personal/retail-loan/auto-loan"
                    }
                  >
                    Loan Against car
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative" onMouseLeave={handleNewsLeave}>
            <div className="flex flex-row " onMouseOver={handleNewsHover}>
              <p className="mx-2">News and Review</p>
              <IoMdArrowDropdown className="my-2 -mx-2" />
            </div>
            {showNewsDropdown && (
              <ul className="absolute z-50 bg-white w-[10rem] border-y-2">
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={""}>Video review</Link>
                </li>
                <li className="text-gray-500 mx-3 text-bold border-y-2 hover:bg-slate-300 ">
                  <Link href={""}>User Review</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
