import React from "react";
import Layout from "./Common/Layout";
import { MdKeyboardArrowRight } from "react-icons/md";

function Dashboard() {
  return (
    <Layout>
      {/* Main image with content */}
      <div className="w-full relative overflow-hidden h-[70vh] lg:h-auto">
        <img
          src="/assets/home-bg.png"
          alt="Not Found"
          className="h-full w-full z-10"
        />
        <div className="absolute top-20 flex justify-center items-center h-full w-full px-4">
          <div className="max-w-2xl w-full flex justify-center text-[#122620] bg-[#F4EBD0] p-4 rounded-xl bg-opacity-90 py-4 md:py-12">
            <div className="text-center">
              <div className="max-w-2xl md:leading-[3.5rem] uppercase lg:text-[45px] font-semibold text-2xl">
                Advanced facial aesthetic clinic
              </div>
              <div className="max-w-2xl tracking-wider mt-2 lg:mt-6">
                Post-Graduation Course for{" "}
                <span className="font-semibold">DOCTORS</span> &{" "}
                <span className="font-semibold">NON-DOCTORS</span>
              </div>
              <div className="w-full flex justify-center mt-5">
                <div className="flex flex-col sm:flex-row gap-6 text-white">
                  <div className="flex gap-2 bg-[#122620] items-center p-4 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#122620] text-white transition-all duration-300 hover:border hover:border-[#122620] tracking-wide hover:font-semibold">
                    <MdKeyboardArrowRight size={30} />
                    <div className="text-xl">Aesthetic Courses</div>
                  </div>
                  {/* <div className="flex gap-2 bg-[#122620] items-center p-4 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#122620] text-white transition-all duration-300 hover:border hover:border-[#122620] tracking-wide hover:font-semibold mt-2 sm:mt-0">
                    <MdKeyboardArrowRight size={30} />
                    <div className="text-xl">Dermatology Courses</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About short section  */}
      <div className="py-20 w-full px-4">
        <div className="text-3xl sm:text-[55px] text-center text-[#122620]">
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
        <div className="max-w-xl mx-auto w-full text-white text-center text-xl mt-8 px-4">
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
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-2 items-center justify-between space-y-4">
            <div className="text-white font-semibold text-base sm:text-[30px] max-w-3xl sm:leading-10 leading-5">
              IF YOU HAVE ANY QUESTIONS OR WOULD LIKE TO MAKE A BOOKING PLEASE
              CONTACT US
            </div>
            <div className="flex justify-start sm:justify-center">
              <button className="bg-[#122620] text-white h-12 px-8 rounded-md transition-all duration-300 w-36">
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
