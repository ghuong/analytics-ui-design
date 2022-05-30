import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

import "./GraphWidget.css";

const GraphWidget = ({
  valuesLabel,
  data,
  color = "#8884d8",
  ticksArray = [],
}) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="dateLabel" ticks={ticksArray} interval={0} />
        <YAxis dataKey={valuesLabel} tickCount={6} hide={true} />
        <CartesianGrid />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={valuesLabel}
          stroke={color}
          fillOpacity={1}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraphWidget;
