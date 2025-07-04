/* eslint-disable no-unused-vars */
import React from "react";
import assets, { userDummyData } from "../assets/assets";
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
          <img src={assets.road5} alt="logo" className="max-w-40" />
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
        <div
          className="bg-[#eff1ed] rounded-full flex items-center gap-2 py-3 px-4
              mt-5"
        >
          <img
            src={assets.search}
            alt="Search"
            className="w-7.5 scale-x-[-1]"
          />
          <input
            type="text"
            className="bg-transparent border-none outline-none 
                  text-black text-xs placeholder-[#283845] flex-1"
            placeholder="Search Friends..."
          />
        </div>
      </div>
      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            onClick={()=> {
              setSelectedUser(user);
            }}
            key={index}
            className={`relative flex items center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user._id && "bg-[#fdf0d5]"
            }`}
          >
            <img
              src={user?.profilePic || assets.user}
              alt=""
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-[#283845] text-xs">Online</span>
              ) : (
                <span className="text-[#ad2831] text-xs">Offline</span>
              )}
            </div>
            {index > 2 && (
              <p
                className="absolute top-4 right-4 text-xs
                      h-5 w-5 flex justify-center items-center rounded-full bg-[#ad2831]"
              >
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
