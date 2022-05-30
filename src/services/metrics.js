import { metricsMetadata } from "./metricsMetadata";

export const getAllMetrics = () => {
  return metricsMetadata.map((metricObj) => {
    // TODO: These would be replaced with actual API calls to fetch real data:
    const last24HoursData = generateFakeTimeseriesData(
      metricObj.value24HoursAgo,
      metricObj.currentValue,
      24,
      1,
      metricObj.name,
      "hourly",
      4
    );
    let last28DaysData = generateFakeTimeseriesData(
      metricObj.value28DaysAgo,
      metricObj.currentValue,
      28,
      24,
      metricObj.name,
      "daily",
      1
    );
    const last7DaysData = last28DaysData.slice(21);
    last28DaysData = last28DaysData.map((dataObj, idx) => {
      const month = dataObj.date.toLocaleString("en-US", { month: "short" });
      const dayOfMonth = dataObj.date.getDate();
      // const dateLabel = (idx - 1) % 4 === 0 ? `${month} ${dayOfMonth}` : "";
      const dateLabel = `${month} ${dayOfMonth}`;
      return {
        ...dataObj,
        dateLabel,
      };
    });
    return {
      ...metricObj,
      last24HoursData,
      last28DaysData,
      last7DaysData,
    };
  });
};

function generateFakeTimeseriesData(
  startValue,
  endValue,
  numIntervals,
  hoursPerInterval,
  valueLabel,
  dateLabelStyle = "hourly"
  // dateLabelStep = 4
) {
  const today = new Date();
  const now = today.getTime();
  const timeseries = new Array(numIntervals + 1);
  timeseries[0] = {};
  timeseries[0][valueLabel] = startValue;
  timeseries[timeseries.length - 1] = { date: today };
  timeseries[timeseries.length - 1][valueLabel] = endValue;
  // generate random values
  for (let i = 1; i < numIntervals; i++) {
    const randomFluctuation = Math.random() * 0.6 + 0.8; // range [0.8, 1.4)
    const value = Math.floor(
      (startValue + (i / (numIntervals + 1)) * (endValue - startValue)) *
        randomFluctuation
    );
    timeseries[i] = {};
    timeseries[i][valueLabel] = value;
  }
  // generate dates
  for (let i = 1; i < numIntervals + 1; i++) {
    const millisecondsPerHours = 60 * 60 * 1000; // 60min * 60sec * 1000ms
    const date = new Date(now - i * hoursPerInterval * millisecondsPerHours);

    const idx = timeseries.length - 1 - i; // working backwards, from second last element
    timeseries[idx] = { ...timeseries[idx], date };
  }
  // generate dateLabels
  for (let i = 0; i < numIntervals + 1; i++) {
    let dateLabel = "";
    switch (dateLabelStyle) {
      case "hourly":
        let hours = timeseries[i].date.getHours();
        let amPm = "AM";
        if (hours === 0) {
          hours = 12; // 12 AM
        } else if (hours === 12) {
          amPm = "PM"; // 12 PM
        } else if (hours > 12) {
          amPm = "PM";
          hours -= 12; // 1 PM - 11 PM
        }

        dateLabel = `${hours} ${amPm}`;
        break;
      case "daily":
      default:
        const month = timeseries[i].date.toLocaleString("en-US", {
          month: "short",
        });
        const dayOfMonth = timeseries[i].date.getDate();
        dateLabel = `${month} ${dayOfMonth}`;
    }

    timeseries[i] = { ...timeseries[i], dateLabel };
  }
  return timeseries;
}
