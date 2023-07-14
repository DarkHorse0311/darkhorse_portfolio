import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col justify-between mx-auto px-8 space-y-8 py-10  lg:flex-row  md:space-y-0  ">
          {/* logo container  */}
          <div className="flex flex-col space-y-12 md:mb-8">
            <img src="src/img/logo-white.svg" alt="" className="lg:h-8 " />
            <div className="flex justify-center space-x-4 ">
              <a href="" className="hover:scale-125">
                <img src="src/img/icon-facebook.svg" alt="" className="h-8  " />
              </a>
              <a href="" className="hover:scale-125">
                <img src="src/img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              <a href="" className="hover:scale-125">
                <img src="src/img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              <a href="" className="hover:scale-125">
                <img src="src/img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              <a href="" className="hover:scale-125">
                <img src="src/img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-around space-x-40 ">
            <div className="flex flex-col space-y-3 text-white ">
              <a href="" className="hover:text-brightRed hover:scale-">
                Home
              </a>
              <a href="" className="hover:text-brightRed hover:scale-110">
                About me
              </a>
              <a href="" className="hover:text-brightRed hover:scale-110">
                Skills
              </a>
              <a href="" className="hover:text-brightRed hover:scale-110">
                Contact
              </a>
            </div>
            {/*  */}
            <div className="flex flex-col space-y-3 text-white  md:mb-20">
              <a href="" className="hover:text-brightRed hover:scale-110">
                Careers
              </a>
              <a href="" className="hover:text-brightRed hover:scale-110">
                Projects
              </a>
              <a href="" className="hover:text-brightRed hover:scale-110">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* searchbar+copyright container */}
          <div className="flex flex-col space-y-12 ">
            <div className="flex space-x-3 ">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Subscribe "
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-900 hover:bg-brightRedLight focus:outline-none hover:scale-110">
                Go
              </button>
            </div>
            <div className="text-white text-center">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}