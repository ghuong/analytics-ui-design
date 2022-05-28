import { metrics } from "./metricsData";

import MetricsView from "./components/MetricsView";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray_custom">
      <MetricsView metrics={metrics} />
    </div>
  );
}

export default App;
