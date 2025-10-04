import { Bell, ChevronDown, Menu, Settings } from "lucide-react";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSidebar}
          >
            <Menu className="size-5" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-[#0E2A45] dark:text-white">
              Dashboard
            </h1>
            <p className="text-[#0E2A45] dark:text-white">
              Welcome back, Siddiq — here’s what’s happening today
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bell className="size-5" />
          </button>
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings className="size-5" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src=""
              alt="user"
              className="size-8 rounded-full ring-2 ring-[#E64D21]"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-[#0E2A45] dark:text-slate-400">
                Siddiq Shah
              </p>
              <p className="text-xs text-[#0E2A45] dark:text-slate-400">
                Administrator
              </p>
            </div>
            <ChevronDown className="size-4 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
