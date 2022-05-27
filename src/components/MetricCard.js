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
    <div className="bg-white p-5">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg">{name}</h2>
          <strong className="text-xl">{valueText}</strong>
        </div>
        <div className={`w-8 h-8 p-2 rounded-full ${iconColor} ${iconBgColor}`}>
          <svg role="img" className="w-full h-full">
            <title>{iconAlt}</title>
            <use href={iconSrc} />
          </svg>
        </div>
      </div>
      <MetricGrowthWidget growthPercent={growthPercent} growthPeriodInDays={growthPeriodInDays} />
    </div>
  );
};

export default MetricCard;
