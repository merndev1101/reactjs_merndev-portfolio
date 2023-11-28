import React, { useEffect } from "react";
// import dnewsImg from "../images/dnewsImage.png";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.jpg";
import Project3 from "../images/project3.jpg";
import Project4 from "../images/project4.jpg";
import AOS from "aos";

const WebsiteProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

      <div className="  flex px-5 lg:p-0 ">
        <h1 className="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
          Web Development
          {/* </span>
          {" In "}
          <span className="   underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">*/}
          </span>
        </h1>
      </div>

      <div className=" flex flex-wrap justify-around  max-w-5xl m-auto mt-5 p-4 lg-p-16  ">
        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        >
          <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-800"></div>
          <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>

          <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
            <div className=" bg-gray-950 rounded-md">
                <img
                  className="rounded-t-lg cursor-pointer"
                  src={Project1}
                  alt="project"
                />
              <div className="p-5">
                  <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                  My password
                  </h5>
                <p className="mb-3 font-normal text-gray-500">
                  This website was built using technical stacks like React, Redux, jQery, Bootstrap, Asp.net.
                  I joined in here as a frontend developer.
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  {/* <a
                    href="https://github.com/DIWAKARKASHYAP/AnonymousChat"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a> */}
                  <a
                    href="https://mypwd.io/"
                    target="_blank"
                    rel="noreferrer"
                    className=" buttonAnimation  m-auto inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        >
          <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-800"></div>
          <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>

          <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
            <div className=" bg-gray-950 rounded-md">
              {" "}
                <img
                  className="rounded-t-lg cursor-pointer"
                  src={Project2}
                  alt="project"
                />
              <div className="p-5">
                  <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                    Plan More Trips
                  </h5>
                <p className="mb-3 pb-8 font-normal text-gray-500">
                  This site was built using MERN stack (MongoDB, Express.js, Node.js, React.js) <br/> I joined here as a backend developer.          </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  {/* <a
                    href="https://github.com/DIWAKARKASHYAP/job-portal"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:right-2 md:focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Code
                  </a> */}
                  <a
                    href="https://app.planmoretrips.com"
                    target="_blank"
                    rel="noreferrer"
                    className=" buttonAnimation  m-auto  inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:right-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        > 
          {" "}
          <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400  via-green-400 to-gray-800"></div>
          <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>
          <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
            <div className=" bg-gray-950 rounded-md">
              {" "}
                <img
                  className="rounded-t-lg cursor-pointer"
                  src={Project3}
                  alt="project"
                />
              <div className="p-5">
                  <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                    STAY AHEAD OF THE GAME
                  </h5>
                <p className="mb-3 font-normal text-gray-500">
                  This site was built using technical stacks like Typescript,Express, Node.js, MongoDB.
                  I have joined here as a full stack developer.
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  {/* <a
                    href="https://github.com/DIWAKARKASHYAP/dnews"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  >
                    View Code
                  </a> */}
                  <a
                    href="https://therundown.io"
                    target="_blank"
                    rel="noreferrer"
                    className=" buttonAnimation m-auto inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
        >
          {" "}
          <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400   to-gray-800"></div>
          <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>
          <div className=" relative  max-w-sm p-1   rounded-lg ">
            <div className=" bg-gray-950 rounded-md">
              {" "}
                <img
                  
                  className="rounded-lg cursor-pointer"
                  src={Project4}
                  alt="project"
                />
              <div className="p-10">
                  <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-gray-200  cursor-pointer">
                    MEMURAI
                  </h5>
                <p className="mb-3 font-normal text-gray-500">
                  This site was built using technical stacks like React.js, Next.js, GraphQL, Node.js.
                  I have joined here as a full stack developer.
                </p>
                <div className="flex justify-between mt-4 space-x-3 md:mt-6">
                  {/* <a
                    href="https://github.com/DIWAKARKASHYAP/dnews"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-2 md:focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  >
                    View Code
                  </a> */}
                  <a
                    href="https://www.memurai.com/"
                    target="_blank"
                    rel="noreferrer"
                    className=" buttonAnimation m-auto inline-flex items-center px-4 py-2 text-sm  text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteProjects;
