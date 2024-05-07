"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughNutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 750, 800],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91f8"],
      },
    ],
    labels: ["Bank 1", "Bank 2 ", "Bank 3"],
  };

  return (
    <div className="w-full">
      <Doughnut
        data={data}
        options={{
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughNutChart;
