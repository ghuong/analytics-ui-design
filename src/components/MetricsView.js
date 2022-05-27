// import { useState } from "react";

import MetricsSummaryContainer from "./MetricsSummaryContainer";
import MetricGraphView from "./MetricGraphView";

const MetricsView = ({ metrics }) => {
  // array index of selected metric
  // const [selectedMetric, setSelectedMetric] = useState(0);

  // const handleSelectMetric = () => setSelectedMetric();

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <MetricsSummaryContainer metrics={metrics.slice(1)} />
      <MetricGraphView />
    </div>
  );
};

export default MetricsView;
