

const sampleDeliveries = [
  {
    id: "D-001",
    customer: "Ali Khan",
    address: "F-8 Markaz, Islamabad",
    status: "On the way",
  },
  {
    id: "D-002",
    customer: "Sara Ahmed",
    address: "DHA Phase 2, Karachi",
    status: "On the way",
  },
  {
    id: "D-003",
    customer: "Bilal Hussain",
    address: "Gulberg, Lahore",
    status: "Delivered",
  },
  {
    id: "D-004",
    customer: "Hassan Raza",
    address: "Bahria Town, Rawalpindi",
    status: "Cancelled",
  },
  {
    id: "D-005",
    customer: "Fatima Noor",
    address: "Clifton, Karachi",
    status: "On the way",
  },
  {
    id: "D-006",
    customer: "Usman Malik",
    address: "Satellite Town, Gujranwala",
    status: "Delivered",
  },
  {
    id: "D-007",
    customer: "Ayesha Siddiqui",
    address: "PECHS, Karachi",
    status: "On the way",
  },
  {
    id: "D-008",
    customer: "Zain Abbas",
    address: "Model Town, Lahore",
    status: "Cancelled",
  },
  {
    id: "D-009",
    customer: "Hamza Tariq",
    address: "University Road, Peshawar",
    status: "On the way",
  },
  {
    id: "D-010",
    customer: "Maha Ali",
    address: "G-10, Islamabad",
    status: "Delivered",
  },
];



export default function DeliveryManagement() {
  return (
    <section>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Delivery Management
              </h3>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {sampleDeliveries.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-b-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.customer}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Address: {product.address}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.id}
                </p>
                <div className="flex items-center space-x-1 justify-end">
                  {product.status === "Delivered" ? (
                    <p className="text-emerald-500">Delivered</p>
                  ) : product.status === "Cancelled" ? (
                    <p className="text-red-500">Cancelled</p>
                  ) : (
                    <p className="text-orange-400">On the way</p>
                  )}

                  {/* <span
                    className={`text-xs ${
                      product.trend === "up"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.change}
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
