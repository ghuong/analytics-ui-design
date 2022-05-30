import { useState } from "react";

import { formatMetricValue } from "../utils/textFormatting";
import MetricGrowthWidget from "./widgets/MetricGrowthWidget";
import GraphWidget from "./widgets/GraphWidget";
import ButtonGroup from "./widgets/ButtonGroup";

const MetricGraphView = ({ metric }) => {
  const { name, currentValue, units, last24HoursData, last28DaysData } = metric;

  const timePeriods = [
    { name: "Day", numDays: 1 },
    { name: "Week", numDays: 7 },
    { name: "Month", numDays: 28 },
  ];
  const [timePeriodIndex, setTimePeriodIndex] = useState(0); // index in array 'timePeriods'
  const handleTimePeriodChange = (event) =>
    setTimePeriodIndex(Number(event.target.value));

  const valueText = formatMetricValue(currentValue, units);

  let graphData = last24HoursData;
  let startingValue = last24HoursData[0].value;
  if (timePeriods[timePeriodIndex].name.toLowerCase() === "month") {
    graphData = last28DaysData; // last month
    startingValue = last28DaysData[0].value;
  } else if (timePeriods[timePeriodIndex].name.toLowerCase() === "week") {
    graphData = last28DaysData.slice(21); // last 7 days
    startingValue = last28DaysData[21].value;
  }

  const growthPercent = ((currentValue / startingValue) - 1) * 100;

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
          <GraphWidget data={graphData} />
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
