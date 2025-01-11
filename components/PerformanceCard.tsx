"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Indicator } from "./Indicator";
import Fundamentals from "./Fundamentals";
import SentimentComponent from "./Sentiments";
export function PerformanceCard({ coin }: { coin: string }) {
  return (
    <div className="bg-white pl-10 pt-8 pr-8 space-y-8">
      <h1 className="text-2xl font-semibold">Performance</h1>
      <Indicator coin={coin} />
      <Fundamentals coin={coin} />
    </div>
  );
}
