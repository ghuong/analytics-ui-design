import { formatMetricValue } from "../../utils/textFormatting";
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

  const valueText = formatMetricValue(value, units);

  return (
    <div className="bg-white p-6">
      <div className="relative">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">{name}</h3>
          <p className="text-4xl">{valueText}</p>
          <MetricGrowthWidget
            growthPercent={growthPercent}
            daysAgo={growthPeriodInDays}
          />
        </div>
        <div
          className={`absolute top-0 right-0 w-12 h-12 p-3 rounded-full ${iconColor} ${iconBgColor}`}
        >
          <svg role="img" className="w-full h-full">
            <title>{iconAlt}</title>
            <use href={iconSrc} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
