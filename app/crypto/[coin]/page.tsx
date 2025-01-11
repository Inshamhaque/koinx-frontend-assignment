import { Chart } from "@/components/Chart";
import { GetStartedCard } from "@/components/GetStartedCard";
import { LineBar } from "@/components/LineBar";
import { Navbar } from "@/components/Navbar";

export default async function CoinPage({
  params,
}: {
  params: { coin: string };
}) {
  const { coin } = params;

  return (
    <div>
      <Navbar />
      <div className="flex items-center ml-[56px]  mt-[26px] space-x-2">
        <h1 className="text-gray-600">Cryptocurrencies</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <h1>{coin}</h1>
      </div>
      <div className="grid grid-cols-3 space-x-[20px] ml-[56px] mr-[56px]">
        {/* left side of grid */}
        <div className="col-span-2 flex flex-col space-y-5">
          <Chart coin={coin.toUpperCase()} />
          <LineBar />
        </div>
        {/* right side of grid */}
        <div>
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
