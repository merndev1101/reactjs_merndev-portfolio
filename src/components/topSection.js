import React from "react";
import banner from "./images/profile.jpg";

const Section = () => {
  return (
    <div  className=" lg:flex flex-row-reverse max-w-full   items-center p-5 sm:p-10 ">
    <div className=" md:w-2/3 m-auto lg:mr-12 shadow-lg">
        <img
          alt="profile"
          id="bannerImg"
          src={banner}
          style={{filter: 'drop-shadow(0 25px 25px rgb(3 5 4 / 0.15))'}}
          className="   relative -top-3 -left-4 border-t-4 border-l-2 rounded-xl"
        />
      </div>
      <div className="   max-w-2xl m-auto  relative   lg:pb-10  text-gray-400">
        <div
          id="text"
          className=" costomFont2  m-4 pt-10  sm:p-20 lg:p-28 text-xl backdrop-blur"
        >
          Welcome,
          <br />Learning is like sailing against the tide, and if you do not advance, you will retreat.
            As a full-stack developer, I am committed to acquiring new knowledge. My journey started with front-end development and now I'm actively involved in open source contributions supporting clients. I am also dedicated to mastering the advanced concepts of React, Typescript, and Next, and is constantly expanding my skill set.
        </div>
      </div>
    </div>
  );
};

export default Section;
