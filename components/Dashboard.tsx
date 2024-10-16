import React from "react";
import Layout from "./Common/Layout";
import { MdKeyboardArrowRight } from "react-icons/md";

function Dashboard() {
  return (
    <Layout>
      {/* Main image with content */}
      <div className="w-full relative">
        <img
          src="/assets/home-bg.png"
          alt="Not Found"
          className="h-full w-full"
        />
        <div className="absolute top-20 flex justify-center items-center h-full w-full">
          <div className="max-w-2xl w-full flex justify-center text-[#122620] bg-[#F4EBD0] p-4 rounded-xl bg-opacity-90 py-12">
            <div className="text-center">
              <div className="max-w-2xl leading-[3.5rem] uppercase text-[45px] font-semibold">
                Advanced facial aesthetic clinic
              </div>
              <div className="max-w-2xl tracking-wider mt-6">
                Post-Graduation Course for{" "}
                <span className="font-semibold">DOCTORS</span> &{" "}
                <span className="font-semibold">NON-DOCTORS</span>
              </div>
              <div className="w-full flex justify-center mt-5">
                <div className="flex gap-6 text-white">
                  <div className="flex gap-2 bg-[#122620] items-center p-4 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#122620] text-white transition-all duration-300 hover:border hover:border-[#122620] tracking-wide hover:font-semibold">
                    <MdKeyboardArrowRight size={30} />
                    <div className="text-xl">Aesthetic Courses</div>
                  </div>
                  <div className="flex gap-2 bg-[#122620] items-center p-4 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#122620] text-white transition-all duration-300 hover:border hover:border-[#122620] tracking-wide hover:font-semibold">
                    <MdKeyboardArrowRight size={30} />
                    <div className="text-xl">Dermatology Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About short section  */}
      <div className="py-20 w-full">
        <div className="text-[55px] text-center text-[#122620]">
          ABOUT A+ AESTHETIC
        </div>
        <div className="max-w-xl w-full mx-auto mt-8 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic natus
          consequatur aperiam repudiandae quia a, ipsam esse fugiat iusto
          praesentium laborum labore molestias, vitae ullam explicabo, alias
          sapiente? Voluptatum rerum neque unde cupiditate fugit voluptate
          aspernatur ipsa, non quas nobis necessitatibus voluptas blanditiis
          dolorem natus culpa veritatis quis numquam quia sunt facere nisi nulla
          qui quae laboriosam. Iste, corporis sed.
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#122620] text-white hover:text-[#122620] hover:bg-transparent hover:border hover:border-[#122620] h-12 px-8 rounded-md transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Doctor section  */}
      <div className="w-full bg-[#122620] py-12">
        <div className="flex justify-center">
          <div className="w-52 bg-[#F4EBD0] rounded-full">
            <img src="/assets/dr-img.png" alt="Dr. Supriya" />
          </div>
        </div>
        <div className="text-center mt-8 text-3xl text-white">
          Dr. SUPRIYA K.P
        </div>
        <div className="text-center mt-1 text-white tracking-wider">
          MBBS (MS) FELLOW FACIAL PLASTIC LEADING COSMETIC SURGEON
        </div>
        <div className="max-w-xl mx-auto w-full text-white text-center text-xl mt-8">
          “Dr. Supriya K.P. is an internationally recognized ans licensed facial
          plastic surgeon with expertise in cosmetic and reconstructive
          procedures. with years of experience and a passion for patient care,
          she combines advanced surgical techniques with a personalized approach
          to help her patients achieve their aesthetic goals.”
        </div>
      </div>

      {/* Contact Us Section  */}
      <div
        className="w-full h-72 flex items-center overflow-y-scroll bg-cover bg-fixed bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=')",
        }}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-white font-semibold text-[30px] max-w-3xl">
              IF YOU HAVE ANY QUESTIONS OR WOULD LIKE TO MAKE A BOOKING PLEASE
              CONTACT US
            </div>
            <div className="flex justify-center">
              <button className="bg-[#122620] text-white h-12 px-8 rounded-md transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
