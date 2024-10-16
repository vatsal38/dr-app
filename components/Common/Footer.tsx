import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <div className="w-full bg-[#F4EBD0] text-[#122620] tracking-wider">
      <div className="max-w-5xl mx-auto flex gap-2 py-24">
        <div className="w-1/2 space-y-3">
          <p className="text-[30px] font-semibold">CONTACT US</p>
          <div>
            <p className="font-semibold">Address:</p>
            <p>102 SS PRIDE, PLOT 155, MCCH Society, Panvel, Mumbai</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <a href="mailto:info@aplusintegra.com">info@aplusintegra.com</a>
          </div>
          <div>
            <p className="font-semibold">Phone No:</p>
            <a href="tel:+919987098011">+91 99870 98011</a>
            <br />
            <a href="tel:+919820808944">+91 98208 08944</a>
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <p className="text-[30px] font-semibold">Website Details</p>

          <div className="mt-4">
            <a href="https://www.aplusintegra.com/">www.aplusintegra.com</a>
          </div>
        </div>
      </div>
      <div className="bg-[#122620] h-[2px] w-full" />
      <div className="max-w-5xl mx-auto flex justify-between py-4">
        <div>© 2021 FK London | Web Design By The Web Surgery</div>
        <div className="flex gap-2">
          <div className="border-black p-2 border-solid border-2 rounded-full w-11 flex justify-center items-center cursor-pointer hover:bg-[#122620] transition-all duration-300 hover:text-white">
            <FaXTwitter size={20} />
          </div>
          <div className="border-black p-2 border-solid border-2 rounded-full cursor-pointer hover:bg-[#122620] transition-all duration-300 hover:text-white">
            <FiFacebook size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
