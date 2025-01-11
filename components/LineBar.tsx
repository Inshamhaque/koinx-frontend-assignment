export function LineBar() {
  return (
    <div className="border-b border-gray-400 pb-3">
      <div className="flex justify-between text-gray-500 font-semibold">
        <div className="relative text-blue-500 font-semibold">
          <div className="border-b-4 border-blue-500 absolute bottom-[-12px] w-full"></div>
          Overview
        </div>
        <div>Fundamentals</div>
        <div>News Insights</div>
        <div>Sentiments</div>
        <div>Team</div>
        <div>Technical</div>
        <div>Tokenomics</div>
      </div>
    </div>
  );
}
