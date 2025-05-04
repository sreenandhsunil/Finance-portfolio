
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const TradingPanel = () => {
  const [sliderValue, setSliderValue] = useState(75);
  const [activeTab, setActiveTab] = useState("orderBook");
  const [price, setPrice] = useState(192.25);
  const [quantity, setQuantity] = useState(10);
  const [orderType, setOrderType] = useState("buy");
  const { toast } = useToast();
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
    setQuantity(Math.round(parseInt(e.target.value) / 10));
  };
  
  const increasePrice = () => {
    setPrice(prev => parseFloat((prev + 0.25).toFixed(2)));
  };
  
  const decreasePrice = () => {
    if (price > 0.25) {
      setPrice(prev => parseFloat((prev - 0.25).toFixed(2)));
    }
  };
  
  const handleSubmitOrder = () => {
    const orderAction = orderType === "buy" ? "Buy" : "Sell";
    const totalCost = (price * quantity).toFixed(2);
    
    toast({
      title: `${orderAction} Order Submitted`,
      description: `${orderAction} ${quantity} shares at ${price} USDT. Total: ${totalCost} USDT`,
      duration: 5000,
    });
  };
  
  return (
    <div className="bg-altfolio-card rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Spot Trading</h3>
        <div className="flex">
          <button 
            className={`px-5 py-2 text-sm ${activeTab === "orderBook" ? "bg-altfolio-highlight" : "bg-altfolio-card border-l border-white/10"} rounded-l-lg hover:bg-altfolio-highlight/70 transition-colors`}
            onClick={() => setActiveTab("orderBook")}
          >
            Order Book
          </button>
          <button 
            className={`px-5 py-2 text-sm ${activeTab === "marketTrades" ? "bg-altfolio-highlight" : "bg-altfolio-card border-l border-white/10"} rounded-r-lg hover:bg-altfolio-highlight/70 transition-colors`}
            onClick={() => setActiveTab("marketTrades")}
          >
            Market Trades
          </button>
        </div>
      </div>
      
      <div className="flex gap-4 mt-6">
        <button 
          className={`flex-1 py-3 rounded-lg ${orderType === "buy" ? "bg-altfolio-positive/90 hover:bg-altfolio-positive" : "bg-black/30 hover:bg-black/50"} transition-colors font-medium`}
          onClick={() => setOrderType("buy")}
        >
          Buy
        </button>
        <button 
          className={`flex-1 py-3 rounded-lg ${orderType === "sell" ? "bg-altfolio-negative/90 hover:bg-altfolio-negative" : "bg-black/30 hover:bg-black/50"} transition-colors font-medium`}
          onClick={() => setOrderType("sell")}
        >
          Sell
        </button>
      </div>
      
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-400">Price</div>
          <div className="flex items-center gap-2">
            <span>{price} USDT</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center gap-3 mb-6">
          <button 
            className="p-1 rounded bg-altfolio-highlight/20 hover:bg-altfolio-highlight/40 transition-colors"
            onClick={decreasePrice}
          >
            <Minus size={16} />
          </button>
          <div className="flex-1 h-10 bg-altfolio-highlight/20 rounded-lg flex items-center px-4 font-medium">
            {price}
          </div>
          <button 
            className="p-1 rounded bg-altfolio-highlight/20 hover:bg-altfolio-highlight/40 transition-colors"
            onClick={increasePrice}
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-400">Quantity</div>
          <div className="flex items-center gap-2">
            <span>{quantity} FAVR</span>
          </div>
        </div>
        
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full appearance-none bg-altfolio-highlight/20 h-2 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-altfolio-positive [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full"
          />
          
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 mt-10">
          <button 
            className={`py-3 rounded-lg ${orderType === "buy" ? "bg-altfolio-positive/90 hover:bg-altfolio-positive" : "bg-altfolio-negative/90 hover:bg-altfolio-negative"} transition-colors font-medium`}
            onClick={handleSubmitOrder}
          >
            {orderType === "buy" ? "Buy FAVR" : "Sell FAVR"}
          </button>
          
          <div className="flex gap-4 mt-2">
            <button className="flex-1 py-3 rounded-lg bg-altfolio-card border border-white/10 hover:bg-altfolio-highlight/30 transition-colors">
              Stocks
            </button>
            <button className="flex-1 py-3 rounded-lg bg-altfolio-card border border-white/10 hover:bg-altfolio-highlight/30 transition-colors">
              Global
            </button>
            <button className="flex-1 py-3 rounded-lg bg-altfolio-card border border-white/10 hover:bg-altfolio-highlight/30 transition-colors">
              Futures
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
