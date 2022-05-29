import { useState } from "react";

import { formatMetricValue } from "../utils/textFormatting";
import MetricGrowthWidget from "./widgets/MetricGrowthWidget";
import GraphWidget from "./widgets/GraphWidget";
import DayWeekMonthSelector from "./widgets/DayWeekMonthSelector";

const MetricGraphView = ({ metric }) => {
  const { name, value, units, growthPercent, growthPeriodInDays } = metric;
  const [timePeriod, setTimePeriod] = useState("day");

  const valueText = formatMetricValue(value, units);

  const handleTimePeriodChange = (event) => setTimePeriod(event.target.value);

  return (
    <section className="bg-white p-6">
      <div className="relative">

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl">{name}</h2>
          <div className="flex gap-5 items-center">
            <p className="text-5xl font-medium">{valueText}</p>
            <MetricGrowthWidget
              growthPercent={growthPercent}
              daysAgo={growthPeriodInDays}
              displayVertically={true}
            />
          </div>
          <GraphWidget />
        </div>

        <div className="absolute top-0 right-0">
          <DayWeekMonthSelector selected={timePeriod} onSelect={handleTimePeriodChange} />
        </div>
      </div>
    </section>
  );
};

export default MetricGraphView;
