import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';

export const BarChartComponent = ({ data }: { data: any[] }) => {
  
  console.log(data);
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="expenses" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};
