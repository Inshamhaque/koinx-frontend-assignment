"use client";
import React, { useEffect, useRef, memo } from "react";

export function Chart({ coin }: { coin: string }) {
  let sym;
  if (coin == "BITCOIN") {
    sym = "BTCUSD";
  }
  return <TradingViewWidget coin={sym || ""} />;
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
