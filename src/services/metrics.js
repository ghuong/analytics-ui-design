import { metricsMetadata } from "./metricsMetadata";

export const getAllMetrics = () => {
  return metricsMetadata.map((metricObj) => {
    // TODO: These would be replaced with actual API calls to fetch real data:
    const last24HoursData = generateFakeTimeseriesData(
      metricObj.value24HoursAgo,
      metricObj.currentValue,
      24,
      1
    );
    const last28DaysData = generateFakeTimeseriesData(
      metricObj.value28DaysAgo,
      metricObj.currentValue,
      28,
      24
    );
    return {
      ...metricObj,
      last24HoursData,
      last28DaysData,
    };
  });
};

function generateFakeTimeseriesData(
  startValue,
  endValue,
  numIntervals,
  hoursPerInterval
) {
  const today = new Date();
  const now = today.getTime();
  const timeseries = new Array(numIntervals + 1);
  timeseries[0] = { value: startValue };
  timeseries[timeseries.length - 1] = { value: endValue, date: today };
  // generate random values
  for (let i = 1; i < numIntervals; i++) {
    const randomFluctuation = Math.random() * 0.6 + 0.8; // range [0.8, 1.4)
    const value = Math.floor(
      (startValue + (i / (numIntervals + 1)) * (endValue - startValue)) *
      randomFluctuation
    );
    timeseries[i] = { value };
  }
  // generate dates
  for (let i = 1; i < numIntervals + 1; i++) {
    const millisecondsPerHours = 60 * 60 * 1000; // 60min * 60sec * 1000ms
    const date = new Date(now - i * hoursPerInterval * millisecondsPerHours);
    const idx = timeseries.length - 1 - i;
    timeseries[idx] = { ...timeseries[idx], date };
  }
  return timeseries;
}
