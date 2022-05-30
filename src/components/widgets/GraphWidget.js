import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import "./GraphWidget.css";

const GraphWidget = ({
  valuesLabel,
  data,
  dataAverage,
  color = "#067dfb",
  xTicks = [],
  yTicks = [],
}) => {
  const formatYAxis = (value) => {
    if (value === 1500) return "1.5K";
    else if (value === 2500) return "2.5K";
    // else if (value === Math.floor(dataAverage)) return "AVG";
    else return "";
  };

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="dateLabel"
          ticks={xTicks}
          tick={{ fill: "gray" }}
          interval={0}
          stroke="lightgray"
        />
        <YAxis
          dataKey={valuesLabel}
          domain={[0, (dataMax) => dataMax * 1.1]}
          ticks={yTicks}
          tick={{ fill: "gray" }}
          tickFormatter={formatYAxis}
          orientation="right"
          axisLine={false}
          tickLine={false}
          padding={0}
          margin={0}
        />
        <CartesianGrid />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={valuesLabel}
          stroke={color}
          strokeWidth={3.5}
          fillOpacity={0.2}
          fill="url(#color)"
        />
        <ReferenceLine
          y={dataAverage}
          label={{ value:"AVG", fill: "darkorange", position: "right", fontWeight: "bold" }}
          stroke="darkorange"
          strokeDasharray="8 8"
          strokeWidth={1.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraphWidget;
