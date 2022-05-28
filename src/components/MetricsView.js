// import { useState } from "react";

import MetricsSummaryContainer from "./MetricsSummaryContainer";
import MetricGraphView from "./MetricGraphView";
import RoundedPanelWrapper from "./wrappers/RoundedPanelWrapper";

const MetricsView = ({ metrics }) => {
  // array index of selected metric
  // const [selectedMetric, setSelectedMetric] = useState(0);

  // const handleSelectMetric = () => setSelectedMetric();

  return (
    <div className="w-5/6 max-w-2xl flex flex-col gap-6">
      <RoundedPanelWrapper>
        <MetricsSummaryContainer metrics={metrics.slice(1)} />
      </RoundedPanelWrapper>

      <RoundedPanelWrapper>
        <MetricGraphView />
      </RoundedPanelWrapper>
    </div>
  );
};

export default MetricsView;
