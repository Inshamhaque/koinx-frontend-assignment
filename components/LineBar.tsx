export function LineBar() {
  return (
    <div className="border-b border-gray-400 pb-3">
      {/* Scrollable container */}
      <div className="flex overflow-x-auto scrollbar-hide text-gray-500 font-semibold">
        {/* Tabs */}
        <div className="flex space-x-6">
          <div className="relative text-blue-500 font-semibold whitespace-nowrap">
            <div className="border-b-4 border-blue-500 absolute bottom-[-12px] w-full"></div>
            Overview
          </div>
          <div className="whitespace-nowrap">Fundamentals</div>
          <div className="whitespace-nowrap">News Insights</div>
          <div className="whitespace-nowrap">Sentiments</div>
          <div className="whitespace-nowrap">Team</div>
          <div className="whitespace-nowrap">Technical</div>
          <div className="whitespace-nowrap">Tokenomics</div>
        </div>
      </div>
    </div>
  );
}
