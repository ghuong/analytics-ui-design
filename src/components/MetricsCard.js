const MetricsCard = ({ metric }) => {
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
    <div className="bg-white">
      <h2 className="text-lg">{name}</h2>
      <strong className="text-xl">{valueText}</strong>
      <div
        className={`w-8 h-8 rounded-full ${iconColor} ${iconBgColor}`}
      >
        <svg className="w-full h-full">
          <use href={iconSrc} />
        </svg>
      </div>
      <img src="./images/growth_icon.svg" alt="Growth Icon" />
    </div>
  );
};

export default MetricsCard;
