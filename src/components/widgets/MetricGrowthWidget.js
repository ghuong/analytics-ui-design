const MetricGrowthWidget = ({ growthPercent, daysAgo, displayInline = true }) => {
  let growthTextColor = "text-medium_sea_green";
  let scaleGrowthIcon = "";
  if (growthPercent < 0) { // negative growth
    growthTextColor = "text-tomato";
    scaleGrowthIcon = "-scale-y-100";
  }

  let daysAgoText = `VS PREV. ${daysAgo} DAY`;
  if (daysAgo > 1) daysAgoText += "S"; // pluralize DAYS

  let flexClassnames = "flex-col gap-1";
  if (displayInline) {
    flexClassnames = "items-center gap-2";
  }

  return (
    <div className={`flex ${flexClassnames}`}>
      <div className="flex gap-2 items-center mr-0.5">
        <div className={`w-4 h-4 ${growthTextColor}`}>
          <svg role="img" className={`w-full h-full ${scaleGrowthIcon}`}>
            <title>Growth Chart Icon</title>
            <use href="./images/growth_chart_icon.svg#icon" />
          </svg>
        </div>
        <p className={`${growthTextColor} font-medium`}>
          {Math.abs(growthPercent)}%
        </p>
      </div>
      <p className="text-gray-400 text-sm">{daysAgoText}</p>
    </div>
  );
};

export default MetricGrowthWidget;
