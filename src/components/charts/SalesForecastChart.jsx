// SalesForecastChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy forecast data
const forecastData = [
  { month: "January", forecast: 12000 },
  { month: "February", forecast: 14000 },
  { month: "March", forecast: 16000 },
  { month: "April", forecast: 18000 },
  { month: "May", forecast: 20000 },
  { month: "June", forecast: 22000 },
  { month: "July", forecast: 24000 },
  { month: "August", forecast: 26000 },
  { month: "September", forecast: 28000 },
  { month: "October", forecast: 30000 },
  { month: "November", forecast: 32000 },
  { month: "December", forecast: 35000 },
];

const SalesForecastChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Sales Forecast
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Predicted sales for the upcoming months
          </p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={forecastData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Forecast"]}
            />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesForecastChart;
