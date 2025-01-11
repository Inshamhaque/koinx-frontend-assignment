"use client";
/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import gsap from "gsap";

type CoinDataType = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  sparkline: string | [];
  price: number | string;
  change: number;
};

export function Footer() {
  return (
    <div className="hidden lg:flex lg:flex-col mt-10 pl-10 pt-10 bg-white space-x-10">
      <div>
        <h1 className="text-2xl font-semibold">You May Also Like</h1>
        <FirstRow />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Trending Coins</h1>
        <FirstRow />
      </div>
    </div>
  );
}

function FirstRow() {
  const [trending, setTrending] = useState<CoinDataType[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/search/trending`,
          {
            params: {
              x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );

        const coinData = response.data.coins.slice(0, 15).map((el: any) => ({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          id: el.item.id,
          name: el.item.name,
          symbol: el.item.symbol,
          market_cap_rank: el.item.market_cap_rank,
          thumb: el.item.thumb,
          change: el.item.data?.price_change_percentage_24h?.usd ?? 0,
          sparkline: el.item.data?.sparkline || [],
          price: el.item.data?.price ?? "N/A",
        }));

        setTrending(coinData);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;

    if (container) {
      const distance = 200;
      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - distance
          : container.scrollLeft + distance;

      gsap.to(container, {
        scrollLeft: newScrollPosition,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="p-4 relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center border bg-white hover:bg-gray-200 rounded-full hover:bg-gray-300 z-10"
        onClick={() => handleScroll("left")}
        aria-label="Scroll Left"
      >
        ←
      </button>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar space-x-1 p-4 bg-white rounded-md"
      >
        {trending.map((coin) => (
          <div
            key={coin.id}
            className="border px-4 py-3 bg-white rounded shadow min-w-[150px] flex-shrink-0"
          >
            <div className="flex items-center space-x-2">
              <Image
                src={coin.thumb}
                alt={coin.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">
                  {coin.symbol.toUpperCase()}
                </p>
                <p className="text-xs text-gray-500">
                  Rank: {coin.market_cap_rank}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold">
                Price:{" "}
                {coin.price !== "N/A"
                  ? `$${parseFloat(coin.price as string).toFixed(2)}`
                  : "N/A"}
              </p>
              <p
                className={`text-sm ${
                  coin.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change.toFixed(2)}%
              </p>
            </div>
            <div className="mt-2">
              <Image
                src={coin.sparkline as string}
                alt={`${coin.name} sparkline`}
                width={120}
                height={40}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center border bg-white hover:bg-gray-200 rounded-full hover:bg-gray-300 z-10"
        onClick={() => handleScroll("right")}
        aria-label="Scroll Right"
      >
        →
      </button>
    </div>
  );
}
