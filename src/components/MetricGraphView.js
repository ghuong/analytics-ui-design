import { useState } from "react";

import { formatMetricValue } from "../utils/textFormatting";
import MetricGrowthWidget from "./widgets/MetricGrowthWidget";
import GraphWidget from "./widgets/GraphWidget";
import ButtonGroup from "./widgets/ButtonGroup";

const MetricGraphView = ({ metric }) => {
  const {
    name,
    cumulativeValue,
    growthPercentLastDay,
    growthPercentLastWeek,
    growthPercentLastMonth,
    units,
    last24HoursData,
    last28DaysData,
    last7DaysData,
  } = metric;

  const timePeriods = [
    { name: "Day", numDays: 1 },
    { name: "Week", numDays: 7 },
    { name: "Month", numDays: 28 },
  ];
  const [timePeriodIndex, setTimePeriodIndex] = useState(0); // index in array 'timePeriods'
  const handleTimePeriodChange = (event) =>
    setTimePeriodIndex(Number(event.target.value));

  const valueText = formatMetricValue(cumulativeValue, units);

  let growthPercent;

  let graphData;
  let xTicks;
  let yTicks = [0, 750, 1500, 2000, 2500];

  if (timePeriods[timePeriodIndex].name.toLowerCase() === "month") {
    graphData = last28DaysData;
    xTicks = last28DaysData
      .filter((dataObj, idx) => {
        if (idx === 0 || idx === last28DaysData.length - 1) return false;

        const dayOfMonth = dataObj.date.getDate();
        return dayOfMonth % 4 === 0;
      })
      .map((dataObj) => dataObj.dateLabel);
    
      growthPercent = growthPercentLastMonth;
  } else if (timePeriods[timePeriodIndex].name.toLowerCase() === "week") {
    graphData = last7DaysData;
    xTicks = null;
    growthPercent = growthPercentLastWeek;
  } else {
    graphData = last24HoursData;
    xTicks = last24HoursData
      .filter((dataObj, idx) => {
        if (idx === 0 || idx === last24HoursData.length - 1) return false;

        const hour = Number(
          dataObj.dateLabel.slice(0, dataObj.dateLabel.length - 3)
        );
        return hour % 4 === 0; // only display hours which are multiples of 4
      })
      .map((dataObj) => dataObj.dateLabel);
    growthPercent = growthPercentLastDay;
  }

  const dataAverage =
    graphData.reduce((prev, curr) => prev + curr[metric.name], 0) /
    graphData.length;

  return (
    <section className="bg-white p-6 pb-3">
      <div className="relative">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl">{name}</h2>
          <div className="flex gap-5 items-center mb-1">
            <p className="text-5xl font-medium">{valueText}</p>
            <MetricGrowthWidget
              growthPercent={growthPercent}
              daysAgo={timePeriods[timePeriodIndex].numDays}
              displayVertically={true}
            />
          </div>
          <GraphWidget
            valuesLabel={metric.name}
            data={graphData}
            xTicks={xTicks}
            yTicks={yTicks}
            graphColor="#067dfb"
            dataAverage={dataAverage}
          />
        </div>

        <div className="absolute top-0 right-0">
          <ButtonGroup
            selections={timePeriods.map((tp) => tp.name)}
            selectedIndex={timePeriodIndex}
            onSelect={handleTimePeriodChange}
          />
        </div>
      </div>
    </section>
  );
};

export default MetricGraphView;
