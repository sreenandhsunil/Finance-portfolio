
import React from "react";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { StockChart } from "@/components/Dashboard/StockChart";
import { useToast } from "@/components/ui/use-toast";

const Performance = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Performance Data Loaded",
      description: "Showing historical performance metrics",
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
              Performance Analysis
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="transition-all hover:shadow-lg hover:shadow-altfolio-highlight/20 duration-300">
                <StockChart />
              </div>
              
              <div className="bg-altfolio-card rounded-xl p-5">
                <h3 className="font-semibold mb-4">Historical Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Last 7 Days</span>
                    <span className="text-altfolio-positive">+4.25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last 30 Days</span>
                    <span className="text-altfolio-positive">+12.87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last 90 Days</span>
                    <span className="text-altfolio-negative">-2.31%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last 365 Days</span>
                    <span className="text-altfolio-positive">+26.54%</span>
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

export default Performance;
