import React from "react";
import headerVideo from "../assets/header.mp4";

const Header = () => {
  return (
    <div className=" justify-start w-full items-center flex h-screen">
      <video
        className=" justify-start w-full h-screen object-cover object-center opacity-85 shadow-ravelBlack shadow-2xl"
        src={headerVideo}
        type="video.mp4"
        loop
        controls={false}
        muted
        autoPlay
      />

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-grayOverlay text-white space-y-5">
        <h1 className="text-8xl font-bold">Adding fun to your life</h1>
        <h3 className="text-2xl">Play game everyday and make your life a lot more exciting</h3>
      </div>
    </div>
  );
};

export default Header;
