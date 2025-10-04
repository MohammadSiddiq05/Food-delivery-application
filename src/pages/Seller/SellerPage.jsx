import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import Dashboard from "../Seller/SellerDashboard/Dashboard";
import AnalyticsReports from "../Seller/SellerDashboard/analytics/AnalyticsReports";
import AnalyticsInsights from "../Seller/SellerDashboard/analytics/AnalyticsInsights";
import Orders from "../Seller/SellerDashboard/Orders";
import Products from "../Seller/SellerDashboard/Products";
import Payments from "../Seller/SellerDashboard/Payments";
import Messages from "../Seller/SellerDashboard/Messages";
import ChartSection from "../../components/charts/ChartSection";
import TableSection from "../../components/charts/TableSection";
import StatsGrid from "../../components/charts/StatsGrid";

const SellerPage = () => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          menu={sidebarMenu}
          onToggle={() => setSidebarMenu(!sidebarMenu)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            menuCollapsed={sidebarMenu}
            onToggleSidebar={() => setSidebarMenu(!sidebarMenu)}
            
          />

          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6">
              {currentPage === "dashboard" && <Dashboard />}
              {currentPage === "overview" && (
                <>
                  <StatsGrid />
                  <ChartSection />
                  <TableSection />
                </>
              )}

              {currentPage === "reports" && <AnalyticsReports />}
              {currentPage === "insights" && <AnalyticsInsights />}
              {currentPage === "order" && <Orders />}
              {currentPage === "inventory" && <Products />}
              {currentPage === "transaction" && <Payments />}
              {currentPage === "messages" && <Messages />}
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
