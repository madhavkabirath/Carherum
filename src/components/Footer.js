import Link from "next/link";
import React from "react";
import { FaAward } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRepair } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-6 flex-row justify-center border-2">
      <div className="container  flex justify-between items-center  flex-row ">
        <div className="flex flex-row">
          <FaAward className="text-6xl my-6 mx-2 " />
          <h1 className="text-bold text-2xl -mx-3 my-8">
            Nepal's No.1{" "}
            <p className="text-slate-400 text-sm mx-2">Largest car seller</p>
          </h1>
        </div>

        <div className="flex flex-row">
          <FaCar className="text-7xl " />
          <h1 className="text-bold text-2xl  my-6">
            Car Sold{" "}
            <p className="text-slate-400 text-sm mx-2">Every 4 minute</p>
          </h1>
        </div>

        <div className="flex flex-row">
          <BiSolidOffer className="text-7xl " />
          <h1 className="text-bold text-2xl  my-6">
            Offers{" "}
            <p className="text-slate-400 text-sm mx-2">
              Stay updated for pay less
            </p>
          </h1>
        </div>

        <div className="flex flex-row">
          <MdOutlineCarRepair className="text-7xl " />
          <h1 className="text-bold text-2xl  my-6">
            Compare{" "}
            <p className="text-slate-400 text-sm mx-2">Decode the right car</p>
          </h1>
        </div>
      </div>
      <div className="bg-white text-black px-3 py-3 flex justy-center grid-col border-2 ">
        <div className="container mx-auto flex justify-between items-center ">
          <p>
            &copy; {new Date().getFullYear()} Car Herum. All rights reserved.
          </p>
          <div>
            <h1 class="text-black px-2 py-3 text-xl">Connect with us</h1>
            <ul className="px-6 py-3 text-slate-400">
              <li>
                <Link href="https://www.facebook.com/carrentalsnepal">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>About Car herum</h1>
            <ul className="px-4 py-3 text-slate-400 ">
              <li>
                <a href="/" className="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/Contact" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
