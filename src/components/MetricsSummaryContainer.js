import MetricCard from "./MetricCard";

const MetricsSummaryContainer = ({ metrics }) => {
  return (
    <ul className={`grid grid-cols-2 gap-0.5 rounded-lg overflow-hidden`}>
      {metrics.map((metric) => (
        <li className="" key={metric.name}>
          <MetricCard metric={metric} />
        </li>
      ))}
    </ul>
  );
};

export default MetricsSummaryContainer;
