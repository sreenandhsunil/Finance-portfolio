
import React from "react";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { useToast } from "@/components/ui/use-toast";
import { Newspaper, Star, MessageSquare, Share2, SearchIcon, TrendingUp } from "lucide-react";

const News = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "News Feed Loaded",
      description: "Latest market updates are now available",
      duration: 3000,
    });
  }, [toast]);

  const newsArticles = [
    {
      id: 1,
      title: "Federal Reserve Signals Potential Rate Cut",
      source: "Financial Times",
      time: "2 hours ago",
      summary: "The Federal Reserve has signaled that it may consider cutting interest rates in the coming months as inflation shows signs of cooling.",
      image: "https://placehold.co/300x200/252136/CCCCCC?text=Fed+News",
      trending: true
    },
    {
      id: 2,
      title: "Tesla Reports Record Quarterly Deliveries",
      source: "Bloomberg",
      time: "4 hours ago",
      summary: "Tesla has reported record vehicle deliveries in the second quarter, exceeding analyst expectations and boosting its stock price.",
      image: "https://placehold.co/300x200/252136/CCCCCC?text=Tesla+News",
      trending: true
    },
    {
      id: 3,
      title: "Apple Announces New AI Integration Across Products",
      source: "TechCrunch",
      time: "6 hours ago",
      summary: "Apple has unveiled plans to integrate advanced AI features across its product lineup, including iPhones, iPads, and Macs.",
      image: "https://placehold.co/300x200/252136/CCCCCC?text=Apple+News",
      trending: false
    },
    {
      id: 4,
      title: "Global Oil Prices Surge Amid Middle East Tensions",
      source: "Reuters",
      time: "Yesterday",
      summary: "Oil prices have surged to a six-month high amid escalating tensions in the Middle East, raising concerns about global supply chains.",
      image: "https://placehold.co/300x200/252136/CCCCCC?text=Oil+News",
      trending: false
    },
    {
      id: 5,
      title: "Bitcoin Breaks $60,000 Barrier Once Again",
      source: "CoinDesk",
      time: "Yesterday",
      summary: "Bitcoin has surpassed the $60,000 mark for the first time in months, driven by increased institutional adoption and positive regulatory news.",
      image: "https://placehold.co/300x200/252136/CCCCCC?text=Bitcoin+News",
      trending: true
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filteredNews = newsArticles
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(article => 
      activeCategory === 'all' || 
      (activeCategory === 'trending' && article.trending)
    );

  return (
    <div className="flex min-h-screen bg-altfolio-bg">
      <Sidebar />
      
      <div className="flex-1 overflow-x-hidden">
        <Header />
        
        <div className="p-6 space-y-8 pb-16 overflow-y-auto max-h-[calc(100vh-76px)]">
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold flex items-center">
                <span className="h-5 w-1 bg-altfolio-positive rounded-full mr-2"></span>
                Market News
              </h2>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-altfolio-card border border-white/10 rounded-lg py-2 pl-10 pr-4 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-altfolio-highlight/50"
                />
                <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="flex gap-4 mb-6">
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeCategory === 'all' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveCategory('all')}
              >
                All News
              </button>
              <button 
                className={`px-4 py-2 text-sm rounded-lg flex items-center gap-1 transition-colors ${activeCategory === 'trending' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveCategory('trending')}
              >
                <TrendingUp size={14} />
                Trending
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNews.length > 0 ? (
                filteredNews.map(article => (
                  <div 
                    key={article.id} 
                    className="bg-altfolio-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-altfolio-highlight/20 transition-all duration-300"
                  >
                    <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-altfolio-highlight/30 text-xs px-2 py-0.5 rounded-full">{article.source}</span>
                        <span className="text-xs text-gray-400">{article.time}</span>
                      </div>
                      
                      <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{article.summary}</p>
                      
                      <div className="flex justify-between items-center">
                        <button className="text-sm flex items-center gap-1 hover:text-altfolio-positive transition-colors">
                          <Star size={16} />
                          <span>Save</span>
                        </button>
                        
                        <div className="flex gap-3">
                          <button className="hover:text-altfolio-positive transition-colors">
                            <MessageSquare size={16} />
                          </button>
                          <button className="hover:text-altfolio-positive transition-colors">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 flex flex-col items-center justify-center p-10 bg-altfolio-card rounded-xl">
                  <div className="p-4 rounded-full bg-altfolio-highlight/30 mb-4">
                    <Newspaper size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium">No news found</h3>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
