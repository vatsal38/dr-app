import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      const offset = 50;

      const sections = [
        "home",
        "about",
        "education",
        "projects",
        "experience",
        "contact",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 py-2 ${
          isScrolled && !isOpen
            ? "bg-[#F4EBD0] shadow-lg text-[#122620]"
            : "bg-transparent text-white"
        }`}
      >
        <div className=" max-w-7xl mx-auto flex justify-between items-center w-full px-4">
          <div className="w-40">
            <Link href={"/"}>
              <img
                src="/assets/logo.png"
                alt="Not Found"
                className="h-full w-full bg-transparent cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 uppercase items-center ">
            <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
              Home
            </span>
            <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
              About
            </span>
            <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
              Treatments
            </span>
            {/* <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
              Our Courses
            </span> */}
            <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
              Online Booking
            </span>
            <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
              Contact
            </span>
          </div>
          <div className="lg:hidden flex justify-center items-center">
            {isOpen ? (
              <AiOutlineCloseCircle
                size={40}
                onClick={() => setIsOpen(false)}
                className={isOpen ? "text-[#122620]" : ""}
              />
            ) : (
              <RiMenuFoldFill size={40} onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`fixed w-full z-20 block md:hidden pt-[120px] rounded-b-2xl ${
          isOpen ? "h-96 top-0" : "h-0 -top-32"
        } transition-all duration-500 bg-[#F4EBD0] overflow-hidden z-30 shadow-xl`}
      >
        <div className="space-y-3 px-4 text-xl pt-5 text-[#122620]">
          <div className="cursor-pointer font-semibold">Home</div>
          <div className="cursor-pointer font-semibold">About</div>
          <div className="cursor-pointer font-semibold">Treatments</div>
          <div className="cursor-pointer font-semibold">Our Courses</div>
          <div className="cursor-pointer font-semibold">Online Booking</div>
          <div className="cursor-pointer font-semibold">Contact</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
