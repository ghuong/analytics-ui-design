import MetricCard from "./MetricCard";

const MetricsSummaryContainer = ({ metrics }) => {
  return (
    <ul className="drop-shadow-md flex flex-col sm:grid grid-cols-2 gap-0.5 rounded-lg overflow-hidden">
      {metrics.map((metric) => (
        <li key={metric.name}>
          <MetricCard metric={metric} />
        </li>
      ))}
    </ul>
  );
};

export default MetricsSummaryContainer;
