import React, { useState } from "react";
import { Account } from "../components/Profile/Account";
import { Address } from "../components/Profile/Address";
import { Order } from "../components/Profile/Order";
import { Wishlist } from "../components/Profile/Wishlist";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";

export const Profile = () => {
  const [activeComponent, setActiveComponent] = useState("account");

  const componentsMap = {
    account: <Account />,
    address: <Address />,
    order: <Order />,
    wishlist: <Wishlist />,
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-10 mx-32 justify-center items-center">
      <h1>My Account</h1>
      <div className="flex w-full justify-between gap-20">
        <div className="w-1/5 bg-gray-200">
          <div className="flex flex-col items-center my-10">
            {/* <Avatar></Avatar>//antd */}
            <h2>Display Name</h2>
          </div>
          <div className=" flex flex-col mx-6 gap-10 text-gray-400 font-semibold ">
            {Object.keys(componentsMap).map((key) => (
              <button
                key={key}
                onClick={() => setActiveComponent(key)}
                className={
                  activeComponent === key
                    ? "text-black text-left border-b-2 border-black"
                    : "hover:text-black border-b-2 text-left border-transparent hover:border-black"
                }
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="hover:text-black text-left border-b-2 border-transparent hover:border-black "
            >
              Logout
            </button>
          </div>
        </div>
        <div className="w-4/5">
          
          {componentsMap[activeComponent]}
        </div>
      </div>
    </div>
  );
};

export default Profile;
