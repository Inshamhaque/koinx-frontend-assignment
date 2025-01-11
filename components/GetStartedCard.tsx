import Image from "next/image";
import image from "@/public/image.png";
export function GetStartedCard() {
  return (
    <div className="bg-[#0052FE] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
      <h1 className="text-lg font-bold text-center mb-2">
        Get Started with KoinX <br /> for FREE
      </h1>
      <p className="text-center text-sm mb-6">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div className="mb-6">
        <Image src={image.src} alt="image" width={240} height={240}></Image>
      </div>
      <button className="bg-white text-blue-500 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-100">
        Get Started for FREE →
      </button>
    </div>
  );
}
