"use client";
/* eslint-disable */
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export function TokenomicsChart() {
  // Updated data for the chart
  const data = {
    labels: ["Crowdsale Investors (80%)", "Foundation (20%)"],
    datasets: [
      {
        label: "Token Distribution",
        data: [80, 20], // Updated values
        backgroundColor: ["#007bff", "#ffa500"], // Blue and orange colors
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const, // Cast "bottom" to its expected type
      },
    },
  };

  return (
    <div className="flex flex-start flex-col space-y-6 bg-white p-6">
      <h1 className="text-lg font-semibold pl-16">Initial Distribution</h1>
      {/* Adjusted chart size */}
      <div className="w-72 h-72">
        <Pie data={data} options={options} />
      </div>
      <p className="text-gray-600">
        The initial token distribution allocates 80% of the supply to Crowdsale
        Investors and 20% to the Foundation.
      </p>
    </div>
  );
}
