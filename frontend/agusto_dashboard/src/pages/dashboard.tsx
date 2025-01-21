import {BarChartComponent} from '../components/barchart';
import {useState, useEffect} from 'react';
import axios from 'axios';


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
      <div className="dboard-container">
        <div className='top-charts'></div>
        <div className='bottom-charts'></div>
        <BarChartComponent data={data}/>
      </div>
    </div>
  )
};
