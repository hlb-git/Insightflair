import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export const AreaChartComponent = ({ data }: { data: any[] }) => {
  
  return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey="revenue" fill="#016DFF" />
          <Area type='monotone' dataKey="expenses" fill="#00D36D" />
        </AreaChart>
      </ResponsiveContainer>
  )
};
