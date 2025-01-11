"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export function TrendingCoins() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending`,
          {
            params: {
              x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );

        const coinData = response.data.coins.slice(0, 3).map((el: any) => ({
          id: el.item.id,
          name: el.item.name,
          symbol: el.item.symbol,
          market_cap_rank: el.item.market_cap_rank,
          thumb: el.item.thumb,
          change: Number(el.item.data?.price_change_percentage_24h.usd) || 0, // Ensure change is a number
        }));

        setTrending(coinData);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Trending Coins</h2>
      <ul className="space-y-3">
        {trending.length > 0 ? (
          trending.map((coin: any) => (
            <li
              key={coin.id}
              className="flex items-center justify-between p-3 rounded"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-800">{coin.name}</p>
                  <p className="text-sm text-gray-500">
                    {coin.symbol.toUpperCase()} - Rank: {coin.market_cap_rank}
                  </p>
                </div>
              </div>
              <div
                className={`text-sm font-medium ${
                  coin.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {typeof coin.change === "number"
                  ? coin.change.toFixed(3)
                  : "N/A"}
                %
              </div>
            </li>
          ))
        ) : (
          <p>Loading trending coins...</p>
        )}
      </ul>
    </div>
  );
}
