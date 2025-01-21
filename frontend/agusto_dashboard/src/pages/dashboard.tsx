import {BarChartComponent} from '../components/barchart';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './dashboard.css';


export function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const requestData: any = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5050/api/metrics'
        );

        setData(response.data);

      } catch (error) {
        console.log('Error:', error);
      };
    }
    requestData();
  }, []);

  return(
 <div className="dboard-wrapper">
      <h1 className="dboard-title">Welcome to Dashboard</h1>
      <div className="dboard-container">
        <div className="chart-item">
          <BarChartComponent data={data} />
        </div>
        <div className="chart-item">
          <BarChartComponent data={data} />
        </div>
        <div className="chart-item">
          <BarChartComponent data={data} />
        </div>
        <div className="chart-item">
          <BarChartComponent data={data} />
        </div>
      </div>
    </div>
  )
};
