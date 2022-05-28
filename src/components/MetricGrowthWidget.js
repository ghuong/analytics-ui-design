const MetricGrowthWidget = ({ growthPercent, growthPeriodInDays }) => {
  let growthTextColor = "text-medium_sea_green";
  let scaleGrowthIcon = "";
  if (growthPercent < 0) { // negative growth
    growthTextColor = "text-tomato";
    scaleGrowthIcon = "-scale-y-100";
  }

  let growthPeriodText = `VS PREV. ${growthPeriodInDays} DAY`;
  if (growthPeriodInDays > 1) growthPeriodText += "S"; // pluralize DAYS

  return (
    <div className="flex gap-2 items-center">
      <div className={` w-4 h-4 ${growthTextColor}`}>
        <svg role="img" className={`w-full h-full ${scaleGrowthIcon}`}>
          <title>Growth Chart Icon</title>
          <use href="./images/growth_chart_icon.svg#icon" />
        </svg>
      </div>
      <p className={`${growthTextColor} font-medium`}>{Math.abs(growthPercent)}%</p>
      <p className="text-gray-400 text-sm ml-1">{growthPeriodText}</p>
    </div>
  );
};

export default MetricGrowthWidget;
