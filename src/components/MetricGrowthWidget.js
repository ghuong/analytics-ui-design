const MetricGrowthWidget = ({ growthPercent, growthPeriodInDays }) => {
  let growthTextColor = "text-medium_sea_green";
  let scaleGrowthIcon = "";
  if (growthPercent < 0) {
    growthTextColor = "text-tomato";
    scaleGrowthIcon = "-scale-y-100";
  }

  let growthPeriodText = `VS PREV. ${growthPeriodInDays} DAY`;
  if (growthPeriodInDays > 1) growthPeriodText += "S"; // pluralize DAYS

  return (
    <div className="flex">
      <div className={`w-5 h-5 ${growthTextColor}`}>
        <svg role="img" className={`w-full h-full ${scaleGrowthIcon}`}>
          <title>Growth Chart Icon</title>
          <use href="./images/growth_chart_icon.svg#icon" />
        </svg>
      </div>
      <p className={growthTextColor}>{growthPercent}%</p>
      <p className="text-gray-400">{growthPeriodText}</p>
    </div>
  );
};

export default MetricGrowthWidget;
