
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface StockItemProps {
  logo: string;
  name: string;
  ticker: string;
  price: string;
  change: string;
  changePercent: string;
  trending: "up" | "down" | "neutral";
}

const StockItem: React.FC<StockItemProps> = ({
  logo,
  name,
  ticker,
  price,
  change,
  changePercent,
  trending,
}) => {
  const trendingColor = 
    trending === "up" 
      ? "text-altfolio-positive" 
      : trending === "down" 
        ? "text-altfolio-negative" 
        : "text-gray-400";

  return (
    <div className="flex items-center py-3 border-b border-white/5 hover:bg-altfolio-highlight/10 transition-colors px-2 rounded">
      <div className="flex items-center gap-3 flex-1">
        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${logo}`}>
          {ticker.slice(0, 1)}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-400">{ticker}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div>{price}</div>
          <div className={`text-xs flex items-center gap-1 ${trendingColor}`}>
            {trending === "up" ? (
              <ChevronUp size={14} />
            ) : trending === "down" ? (
              <ChevronDown size={14} />
            ) : null}
            <span>{change}</span>
            <span>({changePercent})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data for stocks
const stocksData: StockItemProps[] = [
  {
    logo: "bg-blue-500",
    name: "Apple Inc.",
    ticker: "AAPL",
    price: "200.54",
    change: "+1.38",
    changePercent: "+0.87%",
    trending: "up",
  },
  {
    logo: "bg-green-500",
    name: "Nvidia Corp.",
    ticker: "NVDA",
    price: "121.20",
    change: "+2.24",
    changePercent: "+1.12%",
    trending: "up",
  },
  {
    logo: "bg-red-500",
    name: "Tesla",
    ticker: "TSLA",
    price: "427.15",
    change: "+1.18",
    changePercent: "+0.2%",
    trending: "up",
  },
  {
    logo: "bg-red-500",
    name: "Broadcom Inc.",
    ticker: "AVGO",
    price: "244.48",
    change: "+9.45",
    changePercent: "+4.11%",
    trending: "up",
  },
  {
    logo: "bg-green-500",
    name: "Visa Inc.",
    ticker: "V",
    price: "251.14",
    change: "-5.18",
    changePercent: "+1.60%",
    trending: "down",
  },
  {
    logo: "bg-red-500",
    name: "Adobe",
    ticker: "ADBE",
    price: "25.60",
    change: "+2.36",
    changePercent: "+4.13%",
    trending: "up",
  },
  {
    logo: "bg-blue-500",
    name: "Cisco Systems",
    ticker: "CSCO",
    price: "287.02",
    change: "+3.21",
    changePercent: "+1.11%",
    trending: "up",
  },
  {
    logo: "bg-blue-500",
    name: "Linde PLC",
    ticker: "LIN",
    price: "47.25",
    change: "-0.18",
    changePercent: "+0.31%",
    trending: "down",
  },
];

export const StockList: React.FC = () => {
  return (
    <div className="bg-altfolio-card rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-white/5">
        <h3 className="font-semibold">Stocks</h3>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs rounded-full bg-altfolio-highlight/40 hover:bg-altfolio-highlight/60 transition-colors">
            Stocks
          </button>
          <button className="px-3 py-1 text-xs rounded-full hover:bg-altfolio-highlight/40 transition-colors">
            Global
          </button>
          <button className="px-3 py-1 text-xs rounded-full hover:bg-altfolio-highlight/40 transition-colors">
            Futures
          </button>
          <button className="px-3 py-1 text-xs rounded-full hover:bg-altfolio-highlight/40 transition-colors">
            NYSE
          </button>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-400 px-4 py-2 border-b border-white/5">
        <div>Stocks</div>
        <div className="flex gap-8">
          <div>Last</div>
          <div>Chg</div>
          <div>Chg%</div>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto px-2">
        {stocksData.map((stock) => (
          <StockItem key={stock.ticker} {...stock} />
        ))}
      </div>
    </div>
  );
};
