import { useState, useEffect } from "react";
import axios from "axios";
export function Indicator({ coin }: { coin: string }) {
  const [current, setCurrent] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<{
    "24High": number;
    "24Low": number;
    "52High": number;
    "52Low": number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/coins/${coin.toLowerCase()}`,
          {
            params: {
              localization: false,
              x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );

        const marketData = response.data.market_data;

        setPriceRange({
          "24High": marketData.high_24h.usd,
          "24Low": marketData.low_24h.usd,
          "52High": 49743,
          "52Low": 16930,
        });

        setCurrent(marketData.current_price.usd);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [coin]);

  const calculatePosition = (value: number, min: number, max: number) => {
    if (min === max) return 0;
    return ((value - min) / (max - min)) * 100;
  };

  if (!priceRange) {
    return <div>Loading...</div>;
  }

  const currentPrice = current;

  const currentPosition24H = calculatePosition(
    currentPrice,
    priceRange["24Low"],
    priceRange["24High"]
  );

  const currentPosition52W = calculatePosition(
    currentPrice,
    priceRange["52Low"],
    priceRange["52High"]
  );

  return (
    <div className="space-y-6 font-sans text-gray-800">
      {/* 24h indicator */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Today's Low</span>
          <span>Today's High</span>
        </div>
        <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full">
          <div
            className="absolute -top-5 left-0 transform -translate-x-1/2 text-xs font-bold text-gray-800 bg-white px-1.5 py-0.5 mt-7 rounded shadow"
            style={{ left: `${currentPosition24H}%` }}
          >
            ▲ ${currentPrice.toFixed(2)}
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span>${priceRange["24Low"].toFixed(2)}</span>
          <span>${priceRange["24High"].toFixed(2)}</span>
        </div>
      </div>

      {/* 52 week indicator  */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>52W Low</span>
          <span>52W High</span>
        </div>
        <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full"></div>
        <div className="flex justify-between text-sm">
          <span>${priceRange["52Low"].toFixed(2)}</span>
          <span>${priceRange["52High"].toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
