import Image from "next/image";
export function Navbar() {
  return (
    <div className=" flex justify-between items-center bg-white px-[60px] py-6 ">
      <div>
        <Image
          src="https://www.koinx.com/guides/_next/static/media/Logo.cdf70f30.svg"
          alt="logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-10 text-lg font-semibold">
        <div>Crypto Taxes</div>
        <div>Free tools</div>
        <div>Resource Center</div>
        <button className=" text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}
