"use client";
/* eslint-disable */
import React, { useRef } from "react";
import gsap from "gsap";

const SentimentComponent = () => {
  // Explicitly type the ref for an HTMLDivElement
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const keyEvents = [
    {
      id: 1,
      icon: "📰",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-400",
    },
    {
      id: 2,
      icon: "📅",
      bgColor: "bg-green-100",
      iconColor: "bg-green-400",
    },
    {
      id: 3,
      icon: "⚠️",
      bgColor: "bg-yellow-100",
      iconColor: "bg-yellow-400",
    },
    {
      id: 4,
      icon: "📈",
      bgColor: "bg-purple-100",
      iconColor: "bg-yellow-400",
    },
    {
      id: 5,
      icon: "⭐",
      bgColor: "bg-pink-100",
      iconColor: "bg-pink-400",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;

    if (container) {
      const distance = 200;
      const direct = direction === "left" ? -1 : 1;

      gsap.to(container, {
        scrollLeft: container.scrollLeft + direct * distance,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="overflow-hidden bg-white p-6 rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>
      <div className="overflow-hidden">
        <h1 className="text-xl text-gray-800 font-semibold mb-4">Key Events</h1>
        <div className="relative">
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center border bg-white hover:bg-gray-200 rounded-full z-10"
            onClick={() => handleScroll("left")}
          >
            ←
          </button>
          <div
            className="flex overflow-x-scroll no-scrollbar flex-nowrap scrollbar-hide space-x-4 pl-10 pr-10"
            ref={scrollContainerRef}
          >
            {keyEvents.map((el, idx) => (
              <div
                className={`max-w-[300px] md:max-w-[500px] ${el.bgColor} shadow-md rounded-lg p-4 flex-shrink-0`}
                key={idx}
              >
                <div className="grid grid-cols-5">
                  <div
                    className={`col-span-1 ${el.iconColor} h-12 w-12 items-center rounded-full flex text-lg md:text-xl lg:text-2xl justify-center`}
                  >
                    {el.icon}
                  </div>
                  <div className="col-span-4 pl-1 flex flex-col">
                    <div className="flex text-wrap text-sm text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Architecto possimus sint nemo quo inventore doloribus
                      facere tenetur omnis nesciunt. Quidem culpa quos pariatur
                      modi error amet vero dicta quae aliquid?
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center border bg-white hover:bg-gray-200 rounded-full z-10"
            onClick={() => handleScroll("right")}
          >
            →
          </button>
        </div>
      </div>
      <div className="mt-8 space-y-8">
        <h1 className="text-lg md:text-xl text-gray-800 font-semibold">
          Analyst Estimates
        </h1>
        <div className="flex space-x-3 lg:space-x-12 items-center text-gray-700">
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-green-100">
            <div className="text-lg lg:text-xl xl:text-2xl">76%</div>
          </div>
          <div className="flex-1 flex-col space-y-4">
            <div className="flex space-x-1 lg:space-x-4 items-center">
              <div>Buy</div>
              <div className="flex-1 h-2 rounded-lg">
                <div
                  className="bg-green-500 h-2 rounded-lg"
                  style={{
                    width: "95%",
                    maxWidth: "76%",
                  }}
                ></div>
              </div>
              <div>76%</div>
            </div>
            <div className="flex space-x-1 lg:space-x-2 items-center">
              <div>Hold</div>
              <div className="flex-1 h-2 rounded-lg">
                <div
                  className="bg-gray-400 h-2 rounded-lg"
                  style={{
                    width: "20%",
                    maxWidth: "8%",
                  }}
                ></div>
              </div>
              <div>8%</div>
            </div>
            <div className="flex space-x-2 lg:space-x-4 items-center">
              <div>Sell</div>
              <div className="flex-1 h-2 rounded-lg">
                <div
                  className="bg-red-500 h-2 rounded-lg"
                  style={{
                    width: "16%",
                  }}
                ></div>
              </div>
              <div>16%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentComponent;
