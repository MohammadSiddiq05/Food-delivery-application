import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const financeData = [
  { month: "January", revenue: 12500, expense: 7800 },
  { month: "February", revenue: 14800, expense: 9200 },
  { month: "March", revenue: 17300, expense: 10100 },
  { month: "April", revenue: 16000, expense: 8500 },
  { month: "May", revenue: 19000, expense: 11000 },
  { month: "June", revenue: 21000, expense: 11800 },
  { month: "July", revenue: 23000, expense: 13000 },
  { month: "August", revenue: 25000, expense: 14000 },
  { month: "September", revenue: 24000, expense: 13500 },
  { month: "October", revenue: 26000, expense: 14500 },
  { month: "November", revenue: 27500, expense: 15500 },
  { month: "December", revenue: 30000, expense: 17000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly revenue and expenses
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {/* Orange dot for Revenue */}
            <div className="size-3 bg-[#E64D21] rounded-full "></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="size-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full "></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expenses
            </span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={financeData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
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
              formatter={(value) => [`$${value.toLocaleString()}`, ""]}
            />
            {/* Revenue bar now orange */}
            <Bar
              dataKey="revenue"
              fill="#E64D21"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            {/* Expenses bar stays gray */}
            <Bar
              dataKey="expense"
              fill="url(#expensesGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />

            <defs>
              {/* Gray gradient for expenses */}
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
