// import { useState } from "react";

import MetricsSummaryContainer from "./MetricsSummaryContainer";
import MetricsGraphView from "./MetricsGraphView";

const MetricsView = ({ metrics }) => {
  // array index of selected metric
  // const [selectedMetric, setSelectedMetric] = useState(0);

  // const handleSelectMetric = () => setSelectedMetric();

  return (
    <div className="flex flex-col gap-4">
      <MetricsSummaryContainer metrics={metrics.slice(1)} />
      <MetricsGraphView />
    </div>
  );
};

export default MetricsView;
