
import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Clock, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Generate more realistic stock data
const generateStockData = (timeframe: string) => {
  // Base values that change based on timeframe
  const baseValues = {
    "1D": { start: 240, volatility: 2, points: 24 },
    "1W": { start: 230, volatility: 5, points: 7 },
    "1M": { start: 220, volatility: 10, points: 30 },
    "3M": { start: 200, volatility: 20, points: 12 },
    "1Y": { start: 180, volatility: 30, points: 12 },
    "ALL": { start: 100, volatility: 50, points: 20 },
  };
  
  const { start, volatility, points } = baseValues[timeframe as keyof typeof baseValues];
  const today = new Date();
  const data = [];
  
  let currentValue = start;
  let trend = 0.2; // Slight upward trend
  
  for (let i = points; i >= 0; i--) {
    const date = new Date(today);
    
    // Adjust date based on timeframe
    if (timeframe === "1D") {
      date.setHours(date.getHours() - i);
    } else if (timeframe === "1W") {
      date.setDate(date.getDate() - i);
    } else if (timeframe === "1M") {
      date.setDate(date.getDate() - i * (30 / points));
    } else if (timeframe === "3M") {
      date.setDate(date.getDate() - i * (90 / points));
    } else if (timeframe === "1Y") {
      date.setMonth(date.getMonth() - i);
    } else if (timeframe === "ALL") {
      date.setFullYear(date.getFullYear() - i * (5 / points));
    }
    
    // Apply random movement + trend
    const randomFactor = (Math.random() - 0.5) * volatility;
    trend += (Math.random() - 0.5) * 0.1; // Trend shifts slightly
    trend = Math.max(-0.3, Math.min(0.3, trend)); // Limit trend
    
    currentValue += randomFactor + trend;
    currentValue = Math.max(50, currentValue); // Prevent going below 50
    
    const formatDate = (date: Date) => {
      if (timeframe === "1D") {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else if (timeframe === "1W" || timeframe === "1M" || timeframe === "3M") {
        return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
      } else {
        return date.toLocaleString('default', { month: 'short', year: '2-digit' });
      }
    };
    
    data.push({
      date: formatDate(date),
      value: parseFloat(currentValue.toFixed(2)),
    });
  }
  
  return data;
};

interface TimeframeButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TimeframeButton: React.FC<TimeframeButtonProps> = ({ 
  label, 
  active = false, 
  onClick 
}) => (
  <button
    className={`px-3 py-1 text-sm rounded transition-colors ${
      active 
        ? "bg-altfolio-highlight text-white" 
        : "text-gray-300 hover:bg-altfolio-highlight/30"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export const StockChart = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const [chartData, setChartData] = useState<any[]>([]);
  const [stockPrice, setStockPrice] = useState(192.37);
  const [stockChange, setStockChange] = useState(7.12);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    loadChartData(activeTimeframe);
  }, [activeTimeframe]);
  
  const loadChartData = (timeframe: string) => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const data = generateStockData(timeframe);
      setChartData(data);
      
      // Update price and change based on first and last data points
      if (data.length > 1) {
        const firstPrice = data[0].value;
        const lastPrice = data[data.length - 1].value;
        setStockPrice(parseFloat(lastPrice.toFixed(2)));
        
        const changePercent = ((lastPrice - firstPrice) / firstPrice) * 100;
        setStockChange(parseFloat(changePercent.toFixed(2)));
      }
      
      setLoading(false);
      
      toast({
        title: "Chart Updated",
        description: `Loaded ${timeframe} timeframe data`,
        duration: 2000,
      });
    }, 500); // 500ms delay to simulate API call
  };
  
  const handleRefresh = () => {
    loadChartData(activeTimeframe);
  };
  
  const handleChangeTimeframe = (timeframe: string) => {
    if (timeframe !== activeTimeframe) {
      setActiveTimeframe(timeframe);
    }
  };
  
  const handleDownload = () => {
    toast({
      title: "Chart Downloaded",
      description: "Chart data has been exported to CSV",
      duration: 3000,
    });
  };
  
  return (
    <div className="bg-altfolio-card rounded-xl p-5 relative">
      {loading && (
        <div className="absolute inset-0 bg-altfolio-card/80 flex items-center justify-center rounded-xl z-10">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-2 border-altfolio-positive border-t-transparent rounded-full animate-spin mb-2"></div>
            <span>Loading chart data...</span>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Broadcom Inc.</h3>
          <div className="text-xs text-gray-400">NASDAQ: AVGO | ${stockPrice}</div>
          <div className={`text-xs ${stockChange >= 0 ? "bg-altfolio-positive/20 text-altfolio-positive" : "bg-altfolio-negative/20 text-altfolio-negative"} px-2 py-0.5 rounded`}>
            {stockChange >= 0 ? "+" : ""}{stockChange}%
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-altfolio-highlight/20 rounded-lg overflow-hidden">
            <TimeframeButton label="1D" active={activeTimeframe === "1D"} onClick={() => handleChangeTimeframe("1D")} />
            <TimeframeButton label="1W" active={activeTimeframe === "1W"} onClick={() => handleChangeTimeframe("1W")} />
            <TimeframeButton label="1M" active={activeTimeframe === "1M"} onClick={() => handleChangeTimeframe("1M")} />
            <TimeframeButton label="3M" active={activeTimeframe === "3M"} onClick={() => handleChangeTimeframe("3M")} />
            <TimeframeButton label="1Y" active={activeTimeframe === "1Y"} onClick={() => handleChangeTimeframe("1Y")} />
            <TimeframeButton label="ALL" active={activeTimeframe === "ALL"} onClick={() => handleChangeTimeframe("ALL")} />
          </div>
          
          <div className="flex gap-1">
            <button className="p-1.5 rounded hover:bg-altfolio-highlight/30" onClick={handleDownload}>
              <Download size={16} />
            </button>
            <button className="p-1.5 rounded hover:bg-altfolio-highlight/30" onClick={handleRefresh}>
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={stockChange >= 0 ? "#4ADE80" : "#F87171"} stopOpacity={0.8} />
                <stop offset="95%" stopColor={stockChange >= 0 ? "#4ADE80" : "#F87171"} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
            />
            <YAxis 
              domain={['auto', 'auto']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              orientation="right"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: stockChange >= 0 ? '#165216' : '#521616', 
                borderColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white'
              }}
              labelStyle={{ color: 'white' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={stockChange >= 0 ? "#4ADE80" : "#F87171"} 
              fillOpacity={1}
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{new Date().toLocaleTimeString()} (UTC {new Date().getTimezoneOffset() / -60})</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 hover:text-white">
            <ZoomOut size={14} />
            <span>Zoom Out</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white">
            <ChevronLeft size={14} />
            <span>Previous</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white">
            <span>Next</span>
            <ChevronRight size={14} />
          </button>
          <button className="flex items-center gap-1 hover:text-white">
            <ZoomIn size={14} />
            <span>Zoom In</span>
          </button>
        </div>
      </div>
    </div>
  );
};
