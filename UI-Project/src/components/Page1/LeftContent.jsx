import React from "react";
import Lottie from "lottie-react";
import upRightArrow from "/Users/Shhruzz/Documents/My Code/React js/UI-Project/src/assets/animations/up-right-arrow.json"; // ✅ renamed

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 p-4 flex flex-col justify-between ">

      <div>
        <h3 className="text-6xl font-bold mb-5 leading-[1.1]">Lorem ipsum <br /> dolor sit amet.</h3> 
        <p className="text-lg font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur nobis molestias nostrum quasi non, laudantium quae reiciendis id earum.</p>
      </div>
      <div className="w-28 h-28 ">
        <Lottie 
          animationData={upRightArrow} 
          loop={true} 
          autoplay={true}
        />
      </div>

    </div>
  );
};

export default LeftContent;
