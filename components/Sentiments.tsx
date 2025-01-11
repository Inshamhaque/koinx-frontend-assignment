"use client";
import React, { useRef } from "react";

const SentimentComponent = () => {
  const scrollContainerRef = useRef(null);
  const keyEvents = [
    {
      id: 1,
      icon: "📰", // News Icon
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-400",
    },
    {
      id: 2,
      icon: "📅", // Event Calendar Icon
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
  return (
    <div className="overflow-hidden bg-white p-6 rounded-lg mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>
      <div className="overflow-hidden">
        <h1 className="text-xl text-gray-800 font-semibold mb-4">Key Events</h1>
        {/* Scrollable Container */}
        <div className="flex items-center">
          <div
            className="flex overflow-x-scroll flex-nowrap scrollbar-hide space-x-4 pl-10 pr-10"
            ref={scrollContainerRef}
          >
            {keyEvents.map((el, idx) => (
              <div
                className={`max-w-[500px] ${el.bgColor} shadow-md rounded-lg p-4 flex-shrink-0`}
                key={idx}
              >
                <div className="grid grid-cols-5">
                  <div
                    className={`col-span-1 ${el.iconColor} h-12 w-12 items-center rounded-full flex text-2xl justify-center`}
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
        </div>
      </div>

      {/* Analyst Estimates */}
      <div className="mt-8 space-y-8">
        <h1 className="text-xl text-gray-800 font-semibold">
          Analyst Estimates
        </h1>
        <div className="flex space-x-12 items-center text-gray-700">
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-green-100">
            <div className="text-2xl">76%</div>
          </div>
          <div className="flex-1 flex-col space-y-4">
            {/* Buy */}
            <div className="flex space-x-4 items-center">
              <div>Buy</div>
              <div className="flex-1 h-2 rounded-lg">
                <div
                  className="bg-green-500 h-2 rounded-lg"
                  style={{ width: "76%" }}
                ></div>
              </div>
              <div>76%</div>
            </div>
            {/* Hold */}
            <div className="flex space-x-2 items-center">
              <div>Hold</div>
              <div className="flex-1 h-2 rounded-lg">
                <div
                  className="bg-gray-400 h-2 rounded-lg"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <div>8%</div>
            </div>
            {/* sell */}
            <div className="flex space-x-4 items-center">
              <div>Sell</div>
              <div className="flex-1 h-2 rounded-lg">
                <div
                  className="bg-red-500 h-2 rounded-lg"
                  style={{ width: "16%" }}
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
