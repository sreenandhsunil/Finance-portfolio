
import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Wallet, BarChart3, TrendingUp, TrendingDown, Bitcoin, Banknote, Building } from "lucide-react";

interface AssetCardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  chartData: { value: number }[];
  trend: "up" | "down";
}

export const AssetCard: React.FC<AssetCardProps> = ({
  title,
  amount,
  icon,
  chartData,
  trend
}) => {
  return (
    <div className="asset-card group relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-altfolio-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-altfolio-highlight/50 flex items-center justify-center border border-altfolio-positive/30">
          {icon}
        </div>
        <span className="text-gray-200 font-medium">{title}</span>
        {trend === "up" ? (
          <TrendingUp size={16} className="ml-auto text-altfolio-positive" />
        ) : (
          <TrendingDown size={16} className="ml-auto text-altfolio-negative" />
        )}
      </div>
      
      <div className="mt-3">
        <div className="text-xl font-bold flex items-center">
          {amount}
          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
            trend === "up" 
              ? "bg-altfolio-positive/20 text-altfolio-positive" 
              : "bg-altfolio-negative/20 text-altfolio-negative"
          }`}>
            {trend === "up" ? "+2.4%" : "-1.8%"}
          </span>
        </div>
        <div className="sparkline-container mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`colorValue-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop 
                    offset="5%" 
                    stopColor={trend === "up" ? "#4ADE80" : "#F87171"} 
                    stopOpacity={0.8} 
                  />
                  <stop 
                    offset="95%" 
                    stopColor={trend === "up" ? "#4ADE80" : "#F87171"} 
                    stopOpacity={0} 
                  />
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={trend === "up" ? "#4ADE80" : "#F87171"} 
                fill={`url(#colorValue-${title})`} 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Predefined asset card types
export const CashCard: React.FC<Omit<AssetCardProps, "title" | "icon">> = (props) => (
  <AssetCard {...props} title="Cash" icon={<Wallet size={18} className="text-white" />} />
);

export const BondsCard: React.FC<Omit<AssetCardProps, "title" | "icon">> = (props) => (
  <AssetCard {...props} title="Bonds" icon={<BarChart3 size={18} className="text-white" />} />
);

export const EquitiesCard: React.FC<Omit<AssetCardProps, "title" | "icon">> = (props) => (
  <AssetCard {...props} title="Equities" icon={<TrendingUp size={18} className="text-white" />} />
);

export const CryptoCard: React.FC<Omit<AssetCardProps, "title" | "icon">> = (props) => (
  <AssetCard {...props} title="Crypto" icon={<Bitcoin size={18} className="text-white" />} />
);

export const LiquidFundCard: React.FC<Omit<AssetCardProps, "title" | "icon">> = (props) => (
  <AssetCard {...props} title="Liquid Fund" icon={<Banknote size={18} className="text-white" />} />
);

export const LargeCapCard: React.FC<Omit<AssetCardProps, "title" | "icon">> = (props) => (
  <AssetCard {...props} title="Large Cap" icon={<Building size={18} className="text-white" />} />
);
