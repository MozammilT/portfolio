import React from "react";
import { mySocials } from "../constants/index.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Footer() {
  const navigate = useNavigate();
  return (
    <section className="pb-3 text-sm text-neutral-400 c-space mt-10">
      <div className="m-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
        <div className="flex items-center justify-center order-2 lg:order-3">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
            {mySocials.map((icon, idx) => (
              <React.Fragment key={idx}>
                <a
                  key={idx}
                  href={icon.href}
                  className="hover:text-white transition-all text-base px-2 py-1 -m-1 rounded touch-manipulation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon.name}
                </a>
                {idx < mySocials.length - 1 && (
                  <div className="hidden sm:block h-5 w-px bg-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start order-1 lg:order-1">
          <div className="relative text-2xl font-bold text-white flex items-center justify-center mb-2">
            <p>Mozammil Tarique</p>
            <span className="bg-[#ef973f] h-2 w-2 rounded-full absolute -right-4 bottom-2" />
          </div>
          <div className="flex gap-2 items-center">
            <img src="mail_icon.png" className="h-4 w-6" alt="Email" />
            <p className="subtext">mozammiltarique007@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end order-3 lg:order-2">
          <p className="text-neutral-300 text-sm font-thin mb-2 text-center lg:text-right">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
            <Link
              onClick={() => navigate("/terms-and-conditions")}
              className="hover:text-white transition-all cursor-pointer text-sm font-thin px-2 py-1 -m-1 rounded touch-manipulation"
            >
              Terms & Conditions
            </Link>
            <div className="hidden sm:block h-5 w-px bg-white/20" />
            <Link
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-white transition-all cursor-pointer text-sm font-thin px-2 py-1 -m-1 rounded touch-manipulation"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
