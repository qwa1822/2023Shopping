import { slide1, slide2, slide3, slide4 } from "../assets";
import { FaArrowLeft, FaRedRiver } from "react-icons/fa";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [slide1, slide2, slide3, slide4];

  const prevSlide = e => {
    setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1);
  };
  const nextSlide = e => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : prev => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-500"
        >
          {data?.length > 0 &&
            data.map(item => (
              <img className="w-[100vw] h-full object-fit" src={item} alt="" />
            ))}
        </div>

        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-20 bottom-40">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] text-white rounded-xl hover:bg-black  border-gray-700 flex items-center justify-center hover:backdrop-blur-lg hover: hover:text-white"
          >
            <FaArrowLeft></FaArrowLeft>
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] rounded-xl text-white border-gray-700 flex justify-center items-center hover:backdrop-blur-lg hover:bg-black hover:text-white "
          >
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
