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
      <div className="flex items-center ml-[56px] mt-[26px] space-x-2">
        <h1 className="text-gray-600">Cryptocurrencies</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <h1>{coin}</h1>
      </div>
    </div>
  );
}
