
import React from "react";
import { 
  Search, 
  Clock, 
  BarChart2, 
  SquarePen, 
  FileText, 
  Calendar, 
  Cog,
  Bell,
  Menu,
  Plus
} from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b border-white/10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-altfolio-highlight/20 rounded-lg">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm w-64"
          />
        </div>
        
        <div className="flex gap-1">
          <button className="p-2 hover:bg-altfolio-highlight/20 rounded">
            <Clock size={18} />
          </button>
          <button className="p-2 hover:bg-altfolio-highlight/20 rounded">
            <BarChart2 size={18} />
          </button>
          <button className="p-2 hover:bg-altfolio-highlight/20 rounded">
            <SquarePen size={18} />
          </button>
          <button className="p-2 hover:bg-altfolio-highlight/20 rounded">
            <FileText size={18} />
          </button>
          <button className="p-2 hover:bg-altfolio-highlight/20 rounded">
            <Calendar size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-altfolio-positive rounded-lg hover:bg-altfolio-positive/80 transition-colors">
          <Plus size={16} />
          <span>Add Alert</span>
        </button>
        
        <button className="p-2 hover:bg-altfolio-highlight/20 rounded relative">
          <Bell size={18} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="p-2 hover:bg-altfolio-highlight/20 rounded">
          <Cog size={18} />
        </button>
        
        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
          <span className="text-black font-medium text-sm">JD</span>
        </div>
      </div>
    </div>
  );
};
