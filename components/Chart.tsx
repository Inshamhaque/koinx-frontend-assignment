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
              ids: coinId.toLowerCase(), // API requires lowercase coin ID
              vs_currencies: "inr,usd", // Fetch prices in USD and INR
              include_24hr_change: true, // Include 24-hour price change
            },
          }
        );
        console.log(response.data);
        // Extract price and percentage change from API response
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
  }, []);

  // Determine symbol based on coin name
  let sym = "";
  if (coin.toUpperCase() === "BITCOIN") {
    sym = "BTC";
  }

  return (
    <div className="bg-white flex flex-col  mt-[26px] pl-10 pt-8">
      {/* Header Section */}
      <div className="flex items-center space-x-2">
        <Image
          src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
          alt={`${coin} logo`}
          width={30}
          height={30}
        />
        <div>{coin.toUpperCase()}</div>
        <div className="text-gray-500">{sym?.toUpperCase()}</div>
      </div>

      {/* Price Section */}
      <div className="mt-4">
        <div className=" flex items-center space-x-4">
          <span className=" text-2xl font-semibold">
            ${price?.usd?.toLocaleString() || "Loading..."}
          </span>
          {price?.usd_24h_change !== undefined && (
            <span
              className={`text-xs text-white rounded-sm px-2 py-1 ${
                price.usd_24h_change >= 0 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              ({price.usd_24h_change.toFixed(2)}%)
            </span>
          )}
          <span className="text-sm text-gray-500 ">(24H)</span>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-700">
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
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${coin}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": false,
          "calendar": true,
          "support_host": "https://www.tradingview.com"
        }`;
    //@ts-ignore
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container h-screen"
      ref={container}
      // style={{ height: "100vh", width: "100vh" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100%", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
