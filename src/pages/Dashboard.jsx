import { Button } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { useLocation, useNavigate } from "react-router-dom";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  LineElement,
  Legend,
  BarElement
);

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const labelWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const labelMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataSubscription = {
    labels: labelWeek,
    datasets: [
      {
        label: "Hight-2013",
        data: [33, 53, 85, 41, 44, 65, 80],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Low-2013",
        data: [33, 25, 35, 51, 54, 76, 40],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  const dataRevenue = {
    labels: labelMonths,
    datasets: [
      {
        label: "Simple column chart",
        data: [33, 53, 85, 100, 44, 65, 80, 40, 22, 33, 55, 11],
        backgroundColor: [
          "#6d78ad",
          "#51cda0",
          "#df7970",
          "#4c9ca0",
          "#ae7d99",
          "#df874d",
        ],
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div style={{ padding: 20, paddingTop: 30 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Button
          type={!pathname.includes("revenue") ? "primary" : "default"}
          onClick={() => navigate("/dashboard/subscription")}
        >
          Subscription
        </Button>
        <Button
          onClick={() => navigate("/dashboard/revenue")}
          type={pathname.includes("revenue") ? "primary" : "default"}
        >
          Revenue
        </Button>
      </div>

      <div style={{ marginTop: 20, width: 1000, margin: "auto" }}>
        <h3 style={{ marginBottom: 10, textAlign: "center" }}>
          {pathname?.includes("revenue")
            ? "Simple column chart"
            : "Simple Line chart"}
        </h3>
        {pathname?.includes("revenue") ? (
          <Bar
            data={dataRevenue}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        ) : (
          <Line data={dataSubscription} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
