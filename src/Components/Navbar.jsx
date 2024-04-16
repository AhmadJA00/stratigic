import React from "react";
import logonav from "../assets/logo/logonav.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const langHandler = (lang) => {
    localStorage.setItem("lang", lang);
    steLang(lang);
  };

  const [lang, steLang] = React.useState(
    localStorage.getItem("lang") || localStorage.setItem("lang", "EN")
  );

  const data = [
    {
      title: "About Us",
      route: "/about",
    },
    {
      title: "Bussniess Consulting",
      route: "/consulting",
    },
    {
      title: "Bussniess Training",
      route: "/tranining",
    },
    {
      title: "Product",
      route: "/products",
    },
    {
      title: "Our Work",
      route: "/ourworks",
    },
  ];
  return (
    <nav className="navbar bg-base-100 max-w-[1200px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div> */}
          {/* <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#service">Our Services</a>
            </li>
            <li>
              <a>Company History</a>
            </li>
            <li>
              <a>Partener</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul> */}
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl py-8 flex flex-col items-center"
        >
          <img src={logonav} alt="" className="w-80 " />
        </Link>
        {pathname != "/" && (
          <ul className="menu menu-horizontal px-2 flex-nowrap hidden lg:flex flex-nowarp flex-row lg:items-center gap-5">
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.route}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* <div className="navbar-end flex items-center gap-5">
        <button
          className={`${lang === "KU" ? "font-bold" : ""}`}
          onClick={() => langHandler("KU")}
        >
          KU
        </button>
        <button
          className={`${lang === "EN" ? "font-bold" : ""}`}
          onClick={() => langHandler("EN")}
        >
          EN
        </button>
        <a className="btn btn-outline rounded-xl px-9">Login</a>
      </div> */}
    </nav>
  );
}
