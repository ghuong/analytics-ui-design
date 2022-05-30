import { getAllMetrics } from "./services/metrics";
import MetricsView from "./components/MetricsView";

function App() {
  const metrics = getAllMetrics();
  console.log(metrics);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray_custom">
      <MetricsView metrics={metrics} />
    </div>
  );
}

export default App;
