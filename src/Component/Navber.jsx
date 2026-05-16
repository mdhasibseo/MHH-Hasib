import React, { useState } from "react";
import mhh from "../assets/mhh.png";
import { Menu, X } from "lucide-react";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_10%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.7)_80%)] pt-5">
      
      {/* navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20">
        
        {/* logo */}
        <div>
          <img
            src={mhh}
            alt=""
            className="w-20 md:w-24 lg:w-28 rounded-full invert"
          />
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex gap-8 text-white">
          <p className="cursor-pointer hover:text-gray-300 duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:duration-300 hover:after:w-full">
            Home
          </p>

          <p className="cursor-pointer hover:text-gray-300 duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:duration-300 hover:after:w-full">
            About Me
          </p>

          <p className="cursor-pointer hover:text-gray-300 duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:duration-300 hover:after:w-full">
            Skills
          </p>
        </div>

        {/* mobile menu icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden duration-300 ${
          open ? "max-h-60 mt-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-white text-lg">
          <p className="cursor-pointer hover:text-gray-300 duration-300">
            Home
          </p>

          <p className="cursor-pointer hover:text-gray-300 duration-300">
            About Me
          </p>

          <p className="cursor-pointer hover:text-gray-300 duration-300">
            Skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navber;