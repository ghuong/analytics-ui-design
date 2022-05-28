// import { useState } from "react";

import MetricsSummaryContainer from "./MetricsSummaryContainer";
import MetricGraphView from "./MetricGraphView";

const MetricsView = ({ metrics }) => {
  // array index of selected metric
  // const [selectedMetric, setSelectedMetric] = useState(0);

  // const handleSelectMetric = () => setSelectedMetric();

  return (
    <div className="w-5/6 max-w-2xl my-10 sm:my-0 flex flex-col gap-6">
      <MetricsSummaryContainer metrics={metrics.slice(1)} />
      <MetricGraphView />
    </div>
  );
};

export default MetricsView;
