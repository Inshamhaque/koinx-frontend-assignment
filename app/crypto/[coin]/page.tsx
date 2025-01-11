import { About } from "@/components/About";
import { Chart } from "@/components/Chart";
import { GetStartedCard } from "@/components/GetStartedCard";
import { LineBar } from "@/components/LineBar";
import { Navbar } from "@/components/Navbar";
import { PerformanceCard } from "@/components/PerformanceCard";
import { Team } from "@/components/Team";
import SentimentComponent from "@/components/Sentiments";
import { Tokenomics } from "@/components/Tokenomics";
import { TrendingCoins } from "@/components/TrendingCoins";
import { Footer } from "@/components/Footer";

export default async function CoinPage({
  params,
}: {
  params: { coin: string };
}) {
  const { coin } = params;

  return (
    <div className="bg-[#eff2f5] min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center px-6 lg:px-16 mt-6 space-x-2">
        <h1 className="text-gray-600 text-sm md:text-base">Cryptocurrencies</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <h1 className="text-sm md:text-base font-medium">{coin}</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-16 mt-8">
        {/* Left Side */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <Chart coin={coin.toUpperCase()} />
          <LineBar />
          <PerformanceCard coin={coin.toUpperCase()} />
          <SentimentComponent />
          <About />
          <Tokenomics />
          <Team />
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <GetStartedCard />
          <TrendingCoins />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
