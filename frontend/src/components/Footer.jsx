import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="footer bg-base-200 text-base-content p-10 ">
        <Link side>
          <img src={Logo} className="w-[70px] h-[70px] opacity-90 " alt="" />
          <p>
            Safespace
            <br />
            Providing quality personal care products
          </p>
        </Link>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={"/about"} className="link link-hover">
            About us
          </Link>
          <Link className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>{" "}
      <div className=" w-full h-full text-center  py-2 ">
        Copyright SafeSpace ©{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
