import MetricCard from "./widgets/MetricCard";
import GridWrapper from "./wrappers/GridWrapper";

const MetricsSummaryContainer = ({ metrics }) => {
  return (
    <div className="bg-gray-200">
      <GridWrapper>
        {metrics.map((metric) => (
          <li key={metric.name}>
            <MetricCard metric={metric} />
          </li>
        ))}
      </GridWrapper>
    </div>
  );
};

export default MetricsSummaryContainer;
