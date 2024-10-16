import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-2 ${
        isScrolled && !isOpen
          ? "bg-[#F4EBD0] shadow-lg text-[#122620]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="w-40">
          <Link href={"/"}>
            <img
              src="/assets/logo.png"
              alt="Not Found"
              className="h-full w-full bg-transparent cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex gap-4 uppercase items-center ">
          <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
            Home
          </span>
          <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
            About
          </span>
          <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
            Treatments
          </span>
          <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
            Our Courses
          </span>
          <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
            Online Booking
          </span>
          <span className="font-semibold hover:font-normal cursor-pointer tracking-wider">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
