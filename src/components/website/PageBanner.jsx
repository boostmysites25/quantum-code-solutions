import React from "react";
import bannerImg from "../../assets/images/banner.webp";

const PageBanner = ({ title, desc }) => {
  return (
    <div
      className="w-full min-h-[75vh] h-fit py-[1rem] bg-cover bg-top relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white/60"></div>
      <div className="w-full translate-y-[20%]">
        <div data-aos="fade-up" className="wrapper text-center">
          <h1 className="heading-1">{title}</h1>
          {desc && <p className="desc mt-3 max-w-[55rem] mx-auto">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
