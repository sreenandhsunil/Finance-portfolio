
import React from "react";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from "lucide-react";

const AutoTrading = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Auto Trading",
      description: "Auto trading features are coming soon",
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
              Auto Trading
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-altfolio-card rounded-xl p-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-altfolio-highlight/30 flex items-center justify-center">
                    <ShoppingCart size={32} className="text-altfolio-positive" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Auto Trading Coming Soon</h3>
                <p className="text-gray-400 mb-6">Our automated trading features are currently in development. Stay tuned for updates!</p>
                <button className="px-6 py-2 bg-altfolio-highlight/30 hover:bg-altfolio-highlight/50 transition-colors rounded-lg">
                  Join Waiting List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoTrading;
