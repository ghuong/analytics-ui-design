export const formatMetricValue = (value, units) => {
  let valueText = value;
  switch (units) {
    case "sec":
      valueText += " sec";
      break;
    case "":
      if (value > 1000) {
        const decimalPlaces = value >= 2000 ? 1 : 2;
        valueText = (value / 1000).toFixed(decimalPlaces) + "K";
      }
      break;
    default:
      valueText += units;
  }
  return valueText;
};