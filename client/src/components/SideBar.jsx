/* eslint-disable no-unused-vars */
import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SideBar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#8da9c4]/10 h-full p-5 rounded-r-xl overflow-y-scroll 
    text-white ${selectedUser ? "max-md:hidden" : ""}`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.road} alt="logo" className="max-w-40" />
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="Menu"
              className="max-h-5 cursor-pointer"
            />
            <div
              className="absolute top-full right-0 z-20 w-32 p-5 rounded-md 
                      bg-[#8da9c4] border-gray-600 text-black-100 hidden group-hover:block"
            >
              <p
                onClick={() => navigate("./Profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>
              <div>
                  <img src={assets.search} alt="Search"  className="max-w-11 scale-x-[-1]"/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
