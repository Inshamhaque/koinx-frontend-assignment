"use client";
import React, { useEffect, useRef, memo, useState } from "react";
import axios from "axios";
import Image from "next/image";

export function Chart({ coin }: { coin: string }) {
  const [price, setPrice] = useState<{
    usd: number;
    inr: number;
    usd_24h_change: number;
  } | null>(null);

  // Fetch data from CoinGecko API
  useEffect(() => {
    const fetchData = async (coinId: string) => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
              ids: coinId.toLowerCase(),
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );
        console.log(response.data);
        const usdValue = response.data[coinId.toLowerCase()].usd;
        const inrValue = response.data[coinId.toLowerCase()].inr;
        const usd24hChange =
          response.data[coinId.toLowerCase()].usd_24h_change || 0;
        setPrice({
          usd: usdValue,
          inr: inrValue,
          usd_24h_change: usd24hChange,
        });
      } catch (error) {
        console.error("Error fetching price data:", error);
      }
    };

    fetchData(coin);
  }, [coin]);

  // Determine symbol based on coin name
  let sym = "";
  let img = "";
  if (coin.toUpperCase() === "BITCOIN") {
    sym = "BTC";
    img = "https://assets.coingecko.com/coins/images/1/small/bitcoin.png";
  }
  if (coin.toUpperCase() === "ETHEREUM") {
    sym = "ETH";
    img = "https://assets.coingecko.com/coins/images/279/small/ethereum.png";
  }
  if (coin.toUpperCase() === "SOLANA") {
    sym = "SOL";
    img = "https://assets.coingecko.com/coins/images/1/thumb/solana.png";
  }

  return (
    <div className="bg-white flex flex-col rounded-lg mt-6 px-6 pt-4 lg:pt-8 lg:px-10 shadow-md">
      {/* Header Section */}
      <div className="flex items-center space-x-2">
        <Image
          src={img}
          alt={`${coin} logo`}
          width={30}
          height={30}
          className="h-6 w-6 md:h-8 md:w-8"
        />
        <div className="text-sm md:text-lg font-medium">
          {coin.toUpperCase()}
        </div>
        <div className="text-gray-500 text-xs md:text-sm">
          {sym.toUpperCase()}
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl md:text-2xl font-semibold">
            ${price?.usd?.toLocaleString() || "Loading..."}
          </span>
          {price?.usd_24h_change !== undefined && (
            <span
              className={`text-xs md:text-sm text-white rounded-sm px-2 py-1 ${
                price.usd_24h_change >= 0 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              ({price.usd_24h_change.toFixed(2)}%)
            </span>
          )}
          <span className="text-xs md:text-sm text-gray-500">(24H)</span>
        </div>
      </div>
      <div>
        <div className="text-xs md:text-sm text-gray-700">
          ₹ {price?.inr?.toLocaleString() || "Loading..."}
        </div>
      </div>
      <div className="mt-5">
        <TradingViewWidget coin={coin} />
      </div>
    </div>
  );
}

function TradingViewWidget({ coin }: { coin: string }) {
  const container = useRef<HTMLDivElement | null>(null);
  const isMobile = window.innerWidth < 768;
  const charheight = isMobile ? "400" : "800";

  useEffect(() => {
    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${coin.toUpperCase()}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": false,
          "calendar": true,
          "height":${charheight}
        }`;
      container.current.innerHTML = "";
      container.current.appendChild(script);
    }
  }, [coin]);

  return (
    <div
      className="tradingview-widget-container w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gray-100 rounded-lg overflow-hidden"
      ref={container}
    >
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
