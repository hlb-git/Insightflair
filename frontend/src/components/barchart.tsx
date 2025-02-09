import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export const BarChartComponent = ({ data }: { data: any[] }) => {
  
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#016DFF" />
          <Bar dataKey="expenses" fill="#00D36D" />
        </BarChart>
      </ResponsiveContainer>
  )
};
