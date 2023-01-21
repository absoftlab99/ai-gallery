import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
// import Perticle from "../../../Components/Perticle/Perticle";

const Banner = () => {
  return (
    <>
    {/* <Perticle></Perticle> */}
    <div className="hero min-h-screen w-100" style={{ backgroundImage: `url("https://i.ibb.co/yS4L39f/1398313.jpg")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">THE LARGEST AI TOOLS LIBRARY, UPDATED DAILY.</h1>
          <p className="mb-5">Understanding the Impact of Artificial Intelligence on Our World". Exploring the Boundless Possibilities of Artificial Intelligence</p>
          <button className="btn btn-accent">Get Started <BsChevronDoubleDown className="ml-2"></BsChevronDoubleDown></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
