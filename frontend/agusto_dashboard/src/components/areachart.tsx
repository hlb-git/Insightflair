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
  
  console.log(data);
  return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey="revenue" fill="#8884d8" />
          <Area type='monotone' dataKey="expenses" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
  )
};
