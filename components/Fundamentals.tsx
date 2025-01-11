import React, { useEffect, useState } from "react";
import axios from "axios";

function Fundamentals({ coin }: { coin: string }) {
  const [data, setData] = useState<{
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    ath: number;
    ath_date: string;
    atl: number;
    atl_date: string;
    atl_percentage: number;
    ath_percentage: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets`,
          {
            params: {
              vs_currency: "usd",
              ids: coin.toLowerCase(),
              x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );

        const coinData = response.data[0];

        setData({
          current_price: coinData.current_price,
          market_cap: coinData.market_cap,
          market_cap_rank: coinData.market_cap_rank,
          total_volume: coinData.total_volume,
          high_24h: coinData.high_24h,
          low_24h: coinData.low_24h,
          ath: coinData.ath,
          ath_date: coinData.ath_date,
          atl: coinData.atl,
          atl_date: coinData.atl_date,
          atl_percentage: coinData.atl_change_percentage,
          ath_percentage: coinData.ath_change_percentage,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [coin]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col md:grid  md:grid-cols-2 gap-8 p-6 font-sans text-gray-800">
      {/* Left Column */}
      <div className="space-y-4">
        <div className="flex justify-between border-b pb-4 ">
          <span className="font-medium">{coin} Price</span>
          <span className="font-bold">
            ${data.current_price.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span>24H Low / 24H High</span>
          <span>
            ${data.low_24h.toLocaleString()} / ${data.high_24h.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span>Trading Volume</span>
          <span>${data.total_volume.toLocaleString()}</span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span>Market Cap Rank</span>
          <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded">
            #{data.market_cap_rank}
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-3 border-b">
        <div className="flex justify-between border-b pb-4">
          <span>Market Cap</span>
          <span>${data.market_cap.toLocaleString()}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span>All-Time High</span>
          <span>
            ${data.ath.toLocaleString()} (
            {new Date(data.ath_date).toLocaleDateString()})
            <br />
            <span className="flex justify-end text-red-500 p-2">
              {data.ath_percentage}%
            </span>
          </span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span>All-Time Low</span>
          <span>
            ${data.atl.toLocaleString()} (
            {new Date(data.atl_date).toLocaleDateString()})
            <br />
            <span className="flex justify-end w-full text-green-500 p-2 ">
              {data.atl_percentage}%
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Fundamentals;
