import {
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const GraphWidget = ({ data, color = "#8884d8" }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fillOpacity={1}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraphWidget;
