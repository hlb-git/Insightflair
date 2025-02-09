import { BarChartComponent } from "../components/barchart";
import { AreaChartComponent } from "../components/areachart";
import { ScatterPlotComponent } from "../components/scatterplot";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

export function Dashboard() {
  const [data, setData] = useState<any[]>([]);
  const [kpiMetrics, setKpiMetrics] = useState({
    totalRevenue: 0,
    totalExpenses: 0,
    totalProfit: 0,
    totalCustomers: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const requestData: any = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/metrics");
        let totalRevenue = 0;
        let totalExpenses = 0;
        let totalProfit = 0;
        let totalCustomers = 0;

        for (let item of response.data) {
          totalRevenue += Number(item.revenue);
          totalExpenses += Number(item.expenses);
          totalProfit += Number(item.profit);
          totalCustomers += Number(item.customer_count);
        }


        setKpiMetrics({
          totalRevenue,
          totalExpenses,
          totalProfit,
          totalCustomers,
        });

        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    requestData();
  }, []); // Dependency array belongs here

  return (
    <div className="dboard-wrapper">
      <h1 className="dboard-title">Welcome to Dashboard</h1>
      <div className="dboard-container">
        <div className="chart-item">
          <BarChartComponent data={data} />
        </div>
        <div className="chart-item">
          <AreaChartComponent data={data} />
        </div>
        <div className="chart-item">
          <ScatterPlotComponent data={data} />
        </div>
        <div className="chart-item kpi">
          <h3>
            {" "}
            Total Revenue:
            <br /> <p className="figure">N{kpiMetrics.totalRevenue}</p>
          </h3>
          <h3>
            {" "}
            Total Expenses:
            <br /> <p className="figure">N{kpiMetrics.totalExpenses}</p>
          </h3>
          <h3>
            {" "}
            Total Profit: <br />
            <p className="figure">{kpiMetrics.totalProfit}</p>
          </h3>
          <h3>
            {" "}
            Total Customers:
            <br /> <p className="figure">{kpiMetrics.totalCustomers}</p>
          </h3>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/upload");
        }}
        className="more-upload"
      >
        Upload Data
      </button>
    </div>
  );
}
