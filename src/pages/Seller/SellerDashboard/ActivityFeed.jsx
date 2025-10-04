import { Clock, User } from "lucide-react";

const activityData = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New Vendor Registered",
    description: "Ali Khan joined FoodZilla as a vendor",
    time: "2 min ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "order",
    icon: Clock,
    title: "Order Completed",
    description: "Order #5466 for Biryani has been completed",
    time: "10 min ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    type: "product",
    icon: User,
    title: "New Product Added",
    description: "Vendor added ‘Zinger Burger’ to their menu",
    time: "30 min ago",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 4,
    type: "system",
    icon: Clock,
    title: "System Update",
    description: "Dashboard updated to version 1.2.0",
    time: "1 hour ago",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Activity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recent System Activities
          </p>
        </div>
        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="p-6 space-y-4">
        {activityData.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div
              className={`p-2 rounded-lg ${activity.bgColor} ${activity.color}`}
            >
              <activity.icon className={`w-5 h-5 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                {activity.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                {activity.description}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <Clock className="size-3 text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400 ">
                  {activity.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
