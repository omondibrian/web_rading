import React from "react";
import Image from "next/image";
import deliveryGuy from "../../static/assets/meals.png";

function Banner() {
  return (
    <div className=" flex flex-row bg-[#ffecc9] rounded-lg border border-gray-200 shadow-md  p-3 mt-12 ">
      <div className="flex flex-col">
        <div className="mb-4">
          <span className="font-semibold">The Fastest In Quality</span><br/>
          <span className="font-semibold ml-1"> Delivery</span>
          <span className="text-red-500 font-semibold ml-1">Products</span>
        </div>

        <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full ">
          Order Now
        </button>
      </div>
      <div className="flex-1 flex-col justify-center">
        <div className="mx-auto flex justify-center">
          <Image
            src={deliveryGuy}
            height={"140px"}
            width="140px"
            alt="delivery man"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
