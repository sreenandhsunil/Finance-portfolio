
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { 
  CashCard, 
  BondsCard, 
  EquitiesCard, 
  CryptoCard, 
  LiquidFundCard, 
  LargeCapCard 
} from "@/components/Dashboard/AssetCard";
import { StockChart } from "@/components/Dashboard/StockChart";
import { StockList } from "@/components/Dashboard/StockList";
import { TradingPanel } from "@/components/Dashboard/TradingPanel";
import { portfolioAssets } from "@/data/mockData";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome notification for better UX
    toast({
      title: "Welcome to Altfolio",
      description: "Your financial dashboard is ready to use",
      duration: 5000,
    });
  }, [toast]);
  
  return (
    <div className="flex min-h-screen bg-altfolio-bg">
      <Sidebar />
      
      <div className="flex-1 overflow-x-hidden">
        <Header />
        
        <div className="p-6 space-y-8 pb-16 overflow-y-auto max-h-[calc(100vh-76px)]">
          {/* Portfolio Section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-xl font-semibold mb-5 flex items-center">
              <span className="h-5 w-1 bg-altfolio-positive rounded-full mr-2"></span>
              Invested Funds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              <div className="transition-all hover:scale-105 duration-300">
                <CashCard 
                  amount={portfolioAssets[0].amount} 
                  chartData={portfolioAssets[0].chartData} 
                  trend={portfolioAssets[0].trend} 
                />
              </div>
              <div className="transition-all hover:scale-105 duration-300">
                <BondsCard 
                  amount={portfolioAssets[1].amount} 
                  chartData={portfolioAssets[1].chartData} 
                  trend={portfolioAssets[1].trend} 
                />
              </div>
              <div className="transition-all hover:scale-105 duration-300">
                <EquitiesCard 
                  amount={portfolioAssets[2].amount} 
                  chartData={portfolioAssets[2].chartData} 
                  trend={portfolioAssets[2].trend} 
                />
              </div>
              <div className="transition-all hover:scale-105 duration-300">
                <CryptoCard 
                  amount={portfolioAssets[3].amount} 
                  chartData={portfolioAssets[3].chartData} 
                  trend={portfolioAssets[3].trend} 
                />
              </div>
              <div className="transition-all hover:scale-105 duration-300">
                <LiquidFundCard 
                  amount={portfolioAssets[4].amount} 
                  chartData={portfolioAssets[4].chartData} 
                  trend={portfolioAssets[4].trend} 
                />
              </div>
              <div className="transition-all hover:scale-105 duration-300">
                <LargeCapCard 
                  amount={portfolioAssets[5].amount} 
                  chartData={portfolioAssets[5].chartData} 
                  trend={portfolioAssets[5].trend} 
                />
              </div>
            </div>
          </div>
          
          {/* Popular Section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <span className="h-5 w-1 bg-altfolio-positive rounded-full mr-2"></span>
                <h2 className="text-xl font-semibold">Popular Markets</h2>
                <div className="ml-3 text-xs px-3 py-1 rounded-full bg-altfolio-highlight/30 text-altfolio-positive">
                  <span>Live Data</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="p-1.5 rounded-full bg-altfolio-highlight/20 hover:bg-altfolio-highlight/40 transition-colors text-gray-300 hover:text-white">
                  <span className="block h-4 w-4"></span>
                </button>
                <button className="p-1.5 rounded-full bg-altfolio-highlight/20 hover:bg-altfolio-highlight/40 transition-colors text-gray-300 hover:text-white">
                  <span className="block h-4 w-4"></span>
                </button>
                <button className="p-1.5 rounded-full bg-altfolio-highlight/20 hover:bg-altfolio-highlight/40 transition-colors text-gray-300 hover:text-white">
                  <span className="block h-4 w-4"></span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 transition-all hover:shadow-lg hover:shadow-altfolio-highlight/20 duration-300">
                <StockChart />
              </div>
              <div className="transition-all hover:shadow-lg hover:shadow-altfolio-highlight/20 duration-300">
                <StockList />
              </div>
            </div>
          </div>
          
          {/* Trading Section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center mb-5">
              <span className="h-5 w-1 bg-altfolio-positive rounded-full mr-2"></span>
              <h2 className="text-xl font-semibold">Trading Platform</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="transition-all hover:shadow-lg hover:shadow-altfolio-highlight/20 duration-300">
                <TradingPanel />
              </div>
              
              <div className="bg-altfolio-card rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-altfolio-highlight/20 duration-300">
                <h3 className="font-semibold mb-4 flex items-center">
                  <span className="h-3 w-3 bg-altfolio-positive rounded-full mr-2"></span>
                  Spot Trading
                </h3>
                
                <div className="flex gap-4 mt-6 mb-6">
                  <button className="flex-1 py-3 rounded-lg bg-altfolio-positive text-black hover:bg-altfolio-positive/90 transition-all transform hover:-translate-y-1 font-medium">
                    Buy
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-altfolio-negative/70 text-white hover:bg-altfolio-negative/90 transition-all transform hover:-translate-y-1 font-medium">
                    Sell
                  </button>
                </div>
                
                <div className="flex justify-between items-center gap-2 mt-8">
                  <div className="text-gray-400">Price</div>
                  <div className="font-medium">152.25 USDT</div>
                </div>
                
                <div className="flex justify-between items-center gap-2 mt-4">
                  <div className="text-gray-400">Quantity</div>
                  <div className="font-medium">FAVR</div>
                </div>
                
                <div className="mt-2 mb-6">
                  <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-altfolio-positive h-full rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <button className="flex-1 text-center py-2 border border-white/10 rounded-lg bg-altfolio-highlight/30 hover:bg-altfolio-highlight/50 transition-colors text-sm">
                    Stocks
                  </button>
                  <button className="flex-1 text-center py-2 border border-white/10 rounded-lg hover:bg-altfolio-highlight/30 transition-colors text-sm">
                    Global
                  </button>
                  <button className="flex-1 text-center py-2 border border-white/10 rounded-lg hover:bg-altfolio-highlight/30 transition-colors text-sm">
                    Futures
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
