import MetricCard from "./widgets/MetricCard";

const MetricsSummaryContainer = ({ metrics }) => {
  return (
    <section className="bg-gray-200">
      <ul className="grid grid-cols-2 gap-0.5">
        {metrics.map((metric) => (
          <li key={metric.name}>
            <MetricCard metric={metric} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MetricsSummaryContainer;
