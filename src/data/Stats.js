import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  MessageSquare,
  Package,
  ShoppingBag,
   DollarSign,
  ShoppingCart,
  Users,
  Truck, 
  Star 
} from "lucide-react";


export const riderStats = [
  {
    title: "Total Deliveries",
    value: "1,245",
    change: "+5.8%",
    trend: "up",
    icon: Truck,
    color: "from-emerald-500 to-green-600",
    bgcolor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Total Earnings",
    value: "$4,560",
    change: "+12.2%",
    trend: "up",
    icon: DollarSign,
    color: "from-blue-500 to-indigo-600",
    bgcolor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Active Deliveries",
    value: "12",
    change: "+3",
    trend: "up",
    icon: Package,
    color: "from-purple-500 to-fuchsia-600",
    bgcolor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Customer Rating",
    value: "4.8 / 5",
    change: "-0.1",
    trend: "down",
    icon: Star,
    color: "from-orange-500 to-amber-600",
    bgcolor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

export const stats = [
  {
    title: "Total Revenue",
    value: "$125,487",
    value: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgcolor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Total Orders",
    value: "8,932",
    change: "+8.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-blue-500 to-indigo-600",
    bgcolor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Products Listed",
    value: "320",
    change: "-18",
    trend: "down",
    icon: Package,
    color: "from-purple-500 to-fuchsia-600",
    bgcolor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Customers",
    value: "4,321",
    change: "-250",
    trend: "down",
    icon: Users,
    color: "from-orange-500 to-amber-600",
    bgcolor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

export const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    subMenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "order",
    icon: ShoppingBag,
    label: "Orders",
  },
  {
    id: "inventory",
    icon: Package,
    label: "Products",
  },
  {
    id: "transaction",
    icon: CreditCard,
    label: "Payments/Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Message",
  },
];