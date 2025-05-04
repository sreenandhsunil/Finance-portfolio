
import { HomeIcon, LineChart, Wallet, ShoppingCart, MessageCircle, CreditCard, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon: Icon, label, to, active }) => {
  return (
    <Link to={to} className="no-underline text-inherit">
      <div className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all relative", 
        active 
          ? "bg-altfolio-highlight text-white" 
          : "text-gray-200 hover:bg-altfolio-highlight/30"
      )}>
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-altfolio-positive rounded-r-md" />
        )}
        <Icon size={20} className={active ? "text-altfolio-positive" : ""} />
        <span>{label}</span>
        {active && (
          <div className="ml-auto bg-altfolio-positive/20 px-2 py-0.5 rounded-full text-xs text-altfolio-positive">
            Active
          </div>
        )}
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-64 bg-altfolio-card h-screen flex flex-col border-r border-white/10 shadow-xl">
      <div className="p-5 flex items-center gap-3 border-b border-white/10">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-altfolio-positive to-altfolio-highlight flex items-center justify-center">
          <Wallet size={20} className="text-altfolio-card" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Altfolio</h1>
          <p className="text-xs text-gray-400">Financial Dashboard</p>
        </div>
      </div>
      
      <div className="mt-6 px-3 flex flex-col gap-2 overflow-y-auto">
        <div className="text-xs text-gray-400 uppercase font-semibold pl-4 mb-1">Main Menu</div>
        <SidebarLink icon={HomeIcon} label="Dashboard" to="/" active={currentPath === "/"} />
        <SidebarLink icon={LineChart} label="Performance" to="/performance" active={currentPath === "/performance"} />
        <SidebarLink icon={Wallet} label="Portfolio" to="/portfolio" active={currentPath === "/portfolio"} />
        <SidebarLink icon={ShoppingCart} label="Auto Trading" to="/auto-trading" active={currentPath === "/auto-trading"} />
        
        <div className="text-xs text-gray-400 uppercase font-semibold pl-4 mt-6 mb-1">Other</div>
        <SidebarLink icon={MessageCircle} label="News" to="/news" active={currentPath === "/news"} />
        <SidebarLink icon={CreditCard} label="Payment" to="/payment" active={currentPath === "/payment"} />
        <SidebarLink icon={Bell} label="Notifications" to="/notifications" active={currentPath === "/notifications"} />
      </div>
      
      <div className="mt-auto p-4 border-t border-white/10 bg-altfolio-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-altfolio-highlight/70 to-altfolio-positive/70 flex items-center justify-center">
              <span className="text-black font-medium">JD</span>
            </div>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-gray-400">Premium Account</div>
            </div>
          </div>
          <Settings size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};
