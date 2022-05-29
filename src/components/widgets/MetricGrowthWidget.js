const MetricGrowthWidget = ({ growthPercent, daysAgo, displayVertically = false }) => {
  let growthTextColor = "text-medium_sea_green";
  let scaleGrowthIcon = "";
  if (growthPercent < 0) { // negative growth
    growthTextColor = "text-tomato";
    scaleGrowthIcon = "-scale-y-100";
  }

  let daysAgoText = `VS PREV. ${daysAgo} DAY`;
  if (daysAgo > 1) daysAgoText += "S"; // pluralize DAYS

  let flexClassnames = "items-center gap-2";;
  if (displayVertically) {
    flexClassnames = "flex-col gap-0.5";
  }

  return (
    <div className={`flex ${flexClassnames}`}>
      <div className="flex gap-2.5 items-center mr-1">
        <div className={` w-5 h-5 ${growthTextColor}`}>
          <svg role="img" className={`w-full h-full ${scaleGrowthIcon}`}>
            <title>Growth Chart Icon</title>
            <use href="./images/growth_chart_icon.svg#icon" />
          </svg>
        </div>
        <p className={`${growthTextColor} text-lg font-medium`}>
          {Math.abs(growthPercent)}%
        </p>
      </div>
      <p className="text-gray-400 text-sm">{daysAgoText}</p>
    </div>
  );
};

export default MetricGrowthWidget;
