import MetricCard from "./widgets/MetricCard";

const MetricsSummaryContainer = ({ metrics }) => {
  return (
    <ul className="bg-gray-200 grid grid-cols-2 gap-0.5">
      {metrics.map((metric) => (
        <li key={metric.name}>
          <MetricCard metric={metric} />
        </li>
      ))}
    </ul>
  );
};

export default MetricsSummaryContainer;
