import { useState } from "react";

import { formatMetricValue } from "../utils/textFormatting";
import MetricGrowthWidget from "./widgets/MetricGrowthWidget";
import GraphWidget from "./widgets/GraphWidget";
import ButtonGroup from "./widgets/ButtonGroup";

const MetricGraphView = ({ metric }) => {
  const {
    name,
    currentValue,
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

  const valueText = formatMetricValue(currentValue, units);

  let graphData;
  let startingValue;
  let ticksArray;

  if (timePeriods[timePeriodIndex].name.toLowerCase() === "month") {
    graphData = last28DaysData;
    startingValue = last28DaysData[0][metric.name];
    ticksArray = last28DaysData
      .filter((dataObj, idx) => {
        if (idx === 0 || idx === last28DaysData.length - 1) return false;

        const dayOfMonth = dataObj.date.getDate();
        return dayOfMonth % 4 === 0;
      })
      .map((dataObj) => dataObj.dateLabel);
  } else if (timePeriods[timePeriodIndex].name.toLowerCase() === "week") {
    graphData = last7DaysData;
    startingValue = last7DaysData[0][metric.name];
    ticksArray = null;
  } else {
    graphData = last24HoursData;
    startingValue = last24HoursData[0][metric.name];
    ticksArray = last24HoursData
      .filter((dataObj, idx) => {
        if (idx === 0 || idx === last24HoursData.length - 1) return false;

        const hour = Number(
          dataObj.dateLabel.slice(0, dataObj.dateLabel.length - 3)
        );
        return hour % 4 === 0; // only display hours which are multiples of 4
      })
      .map((dataObj) => dataObj.dateLabel);
  }

  const growthPercent = (currentValue / startingValue - 1) * 100;

  return (
    <section className="bg-white p-6">
      <div className="relative">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl">{name}</h2>
          <div className="flex gap-5 items-center">
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
            ticksArray={ticksArray}
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
