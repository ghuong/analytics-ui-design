import MetricGrowthWidget from "./MetricGrowthWidget";

const MetricCard = ({ metric }) => {
  const {
    name,
    value,
    units,
    growthPercent,
    growthPeriodInDays,
    iconSrc,
    iconAlt,
    iconColor,
    iconBgColor,
  } = metric;

  let valueText = value;
  switch (units) {
    case "sec":
      valueText += " sec";
      break;
    case "":
      if (value > 1000) {
        valueText = (value / 1000).toFixed(2) + "K";
      }
      break;
    default:
      valueText += units;
  }

  return (
    <div className="bg-white p-6 flex flex-col justify-between gap-2">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg">{name}</h2>
          <p className="text-4xl mt-2">{valueText}</p>
        </div>
        <div
          className={`w-12 h-12 p-3 rounded-full ${iconColor} ${iconBgColor}`}
        >
          <svg role="img" className="w-full h-full">
            <title>{iconAlt}</title>
            <use href={iconSrc} />
          </svg>
        </div>
      </div>
      <MetricGrowthWidget
        growthPercent={growthPercent}
        daysAgo={growthPeriodInDays}
      />
    </div>
  );
};

export default MetricCard;
