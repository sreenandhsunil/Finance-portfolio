
import React from "react";
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
import { portfolioAssets } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const Portfolio = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Portfolio Updated",
      description: "Your portfolio data has been refreshed",
      duration: 3000,
    });
  }, [toast]);

  return (
    <div className="flex min-h-screen bg-altfolio-bg">
      <Sidebar />
      
      <div className="flex-1 overflow-x-hidden">
        <Header />
        
        <div className="p-6 space-y-8 pb-16 overflow-y-auto max-h-[calc(100vh-76px)]">
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-5 flex items-center">
              <span className="h-5 w-1 bg-altfolio-positive rounded-full mr-2"></span>
              Portfolio Breakdown
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

            <div className="mt-8 bg-altfolio-card rounded-xl p-5">
              <h3 className="font-semibold mb-4">Portfolio Allocation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">By Asset Type</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cash</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-altfolio-positive h-full rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Bonds</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Equities</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Crypto</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Other</span>
                        <span>20%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-pink-500 h-full rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">By Risk Level</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Low Risk</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Medium Risk</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>High Risk</span>
                        <span>20%</span>
                      </div>
                      <div className="w-full bg-altfolio-highlight/20 h-2 rounded-full">
                        <div className="bg-red-500 h-full rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
