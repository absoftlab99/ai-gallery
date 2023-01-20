import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/rmxrLDc/pngtree-modern-technology-intelligent-ai-era-background-design-picture-image-971869-transformed.png")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Discover AI</h1>
          <p className="mb-5">Understanding the Impact of Artificial Intelligence on Our World". Exploring the Boundless Possibilities of Artificial Intelligence</p>
          <button className="btn btn-primary">Get Started <BsChevronDoubleDown className="ml-2"></BsChevronDoubleDown></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
