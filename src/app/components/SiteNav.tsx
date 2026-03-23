import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAboutActive = location.pathname === "/about";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 px-6 md:px-12 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto py-6 flex justify-between items-center relative">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
            <span className="text-sm font-bold text-white">CT</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            to={{ pathname: "/", hash: "work" }}
            className="font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors text-[13px]"
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`text-xs font-bold tracking-wider uppercase transition-colors ${
              isAboutActive ? "text-black" : "text-black/60 hover:text-black"
            }`}
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1IzwB15tZ6ifleu91ckA67inLejH-Sfe3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block text-xs font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors"
          >
            Resume
          </a>
          <Link to={{ pathname: "/", hash: "contact" }} className="cursor-pointer">
            <Button
              size="sm"
              className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-11 font-bold tracking-wider cursor-pointer"
            >
              CONTACT ME
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
