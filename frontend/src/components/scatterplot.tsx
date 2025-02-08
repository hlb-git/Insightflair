import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const ScatterPlotComponent = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart>
        <XAxis dataKey="customer_count" name="Customers" />
        <YAxis dataKey="revenue" name="Revenue" />
        <Tooltip />
        <Scatter data={data} fill="#016DFF" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
