import React, { useEffect } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiCanva,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";
import { FaHardHat, FaGithub } from "react-icons/fa";
import AOS from "aos";

// import Marquee from "./smallComponent/marquee";

// const skillData =[
//   {logo : "DiHtml5", name : "HTML"} ,
//   {logo : "DiCss3" , name : "Css"} ,
//   {logo : "DiJavascript1" , name : "javascript"}
// ]

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className=" bg-pink-500 max-w-7xl h-1 rounded-xl m-auto lg:mb-10 mb-8"></div>
      <div>
        <div className=" w-full overflow-hidden  content-center grid  ">
          <h2 className="title mb-8 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl  text-gray-200  mt-10 ">
            {" "}
            What I Know
          </h2>
          <div className=" max-w-full  m-auto overflow-hidden  ">
            {/* marquee 👇 */}
            <div className=" flex gap-7 md:gap-12   bg-gradient-to-t from-black via-slate-700 to-black text-pink-500 ">
              <div className="marquee-group flex shrink-0 items-center justify-around gap-7 md:gap-12 min-w-full  ">
                {" "}
                <div className="marquee-tag-wrapper ">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiHtml5 className=" h-10 w-10 " />
                    </div>
                    <span className="marquee-tag ">
                      HTML
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiCss3 className="h-10 w-10 " />
                    </div>
                    <span className="marquee-tag">CSS</span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiJavascript className="h-10 w-10 " />
                    </div>
                    <span className="marquee-tag">
                      Javascript
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiReact className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      React.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiNextdotjs className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Next.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiNodedotjs className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Node.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiCanva className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      canva
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiSolidity className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Solidity
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiEthereum className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Ether.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <FaHardHat className="h-9 w-9" />
                    </div>
                    <span className="marquee-tag">
                      Hardhat
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <FaGithub className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      github
                    </span>{" "}
                  </div>
                </div>{" "}
              </div>
              <div
                aria-hidden="true"
                className="marquee-group flex shrink-0 items-center justify-around gap-7 md:gap-12 min-w-full"
              >
                {" "}
                <div className="marquee-tag-wrapper  ">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiHtml5 className="h-10 w-10 " />
                    </div>
                    <span className=" marquee-tag">
                      HTML
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiCss3 className="h-10 w-10 " />
                    </div>
                    <span className="marquee-tag">CSS</span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiJavascript className="h-10 w-10 " />
                    </div>
                    <span className="marquee-tag">
                      Javascript
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <DiReact className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      React.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiNextdotjs className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Next.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiNodedotjs className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Node.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiCanva className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      canva
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiSolidity className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Solidity
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <SiEthereum className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      Ether.js
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <FaHardHat className="h-9 w-9" />
                    </div>
                    <span className="marquee-tag">
                      Hardhat
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="marquee-tag-wrapper">
                  <div className="flex items-center">
                    {" "}
                    <div className=" w-10 h-10 cont bg-slate-600 rounded-full">
                      <FaGithub className="h-10 w-10" />
                    </div>
                    <span className="marquee-tag">
                      github
                    </span>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>

            <div className=" max-w-7xl m-auto sm:flex  mt-14  ">
              <div
                data-aos="fade-right"
                className="   sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col  items-center  border-solid border-pink-500 border-2 rounded-lg relative  bg-gradient-to-br from-white/5 via-pink-100/5 to-pink-300/30"
              >
                <div className=" sun bg-pink-600 opacity-95 h-11 w-11 rounded-full border-4 border-pink-600 absolute left-0 top-0"></div>
                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                   Web frontend
                </div>
                <div>
                  <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>javascript</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>
                      MUI , Ant design, Bootstrap etc
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div data-aos="fade-left" className="w-1/2 flex flex-col items-center"> */}
              <div
                data-aos="fade-left"
                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-green-500 border-2 rounded-lg relative  bg-gradient-to-bl from-emerald-50/10 via-emerald-100/5 to-emerald-300/30"
              >
                <div className=" sun2 bg-emerald-500 opacity-95 h-11 w-11 rounded-full absolute right-0 top-0"></div>
                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                  Web Backend
                </div>
                <div>
                  <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                    <li>node.js</li>
                    <li>express.js</li>
                    <li>Laravel</li>
                    <li>MongoDB</li>
                    <li>MySQl</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" max-w-7xl m-auto sm:flex  mt-10  ">
                <div
                data-aos="fade-left"
                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-sky-500 border-2 rounded-lg relative  bg-gradient-to-br from-white/5 via-sky-100/5 to-sky-300/30"
              >
                <div className=" sun4 bg-sky-400 opacity-95 h-11 w-11 rounded-full  absolute left-0 top-0"></div>
                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                  Blockchain
                </div>
                <div>
                  <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                    <li>Ethereum</li>
                    <li>Solidity</li>
                    <li>Ether.js</li>
                    <li>web3.js</li>
                    <li>Hardhat</li>
                    <li>Uniswap</li>
                  </ul>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className=" sm:w-1/2 sm:m-10 m-10 mt-20 p-4 flex flex-col items-center  border-solid border-yellow-500 border-2 rounded-lg relative  bg-gradient-to-bl from-white/5 via-yellow-100/5 to-yellow-300/30"
              >
                <div className=" sun3 bg-yellow-400 opacity-95 h-11 w-11 rounded-full  absolute right-0 top-0"></div>
                <div className=" m-5 mb-0 text-3xl font-semibold capitalize text-gray-300">
                  Misc
                </div>
                <div>
                <ul className="  mt-2 m-5 flex flex-col items-center justify-center text-xl font-medium text-gray-400 ">
                    <li>Git</li>
                    <li>Canva</li>
                    <li>figma</li>
                    <li>web socket</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
