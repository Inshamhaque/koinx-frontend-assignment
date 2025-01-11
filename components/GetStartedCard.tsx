/* eslint-disable */
import Image from "next/image";
import image from "@/public/image.png";

export function GetStartedCard() {
  return (
    <div className="mt-6 bg-[#0052FE] text-white rounded-lg pl-3 pr-3 pt-4 lg:p-10 shadow-md flex flex-col items-center">
      <div className="mb-6 lg:hidden">
        <Image
          src={image.src}
          alt="image"
          width={240}
          height={240}
          className="w-40 h-40 md:w-48 md:h-48"
        />
      </div>

      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-4">
        Get Started with KoinX <br className="hidden md:block" /> for FREE
      </h1>
      <p className="text-sm md:text-base text-center mb-6 lg:mb-8">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <div className="hidden lg:block mb-6">
        <Image
          src={image.src}
          alt="image"
          width={240}
          height={240}
          className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
        />
      </div>

      <button className="bg-white text-blue-500 font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg mb-5 shadow hover:bg-gray-100 transition-transform transform hover:scale-105">
        Get Started for FREE →
      </button>
    </div>
  );
}
