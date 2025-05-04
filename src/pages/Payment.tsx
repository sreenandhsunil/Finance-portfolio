
import React from "react";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Plus, ChevronDown, Check, Calendar, Clock, FileText, ArrowRight, ArrowLeft } from "lucide-react";

const Payment = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Payment System",
      description: "You can now manage all your payments",
      duration: 3000,
    });
  }, [toast]);

  const transactions = [
    {
      id: 'tx1',
      name: "Apple Inc. Stock Purchase",
      amount: -1250.00,
      date: "May 3, 2025",
      status: "completed",
      category: "investment",
      cardLast4: "4567"
    },
    {
      id: 'tx2',
      name: "Dividend Payment - Microsoft",
      amount: 87.34,
      date: "May 2, 2025",
      status: "completed",
      category: "income",
      cardLast4: "N/A"
    },
    {
      id: 'tx3',
      name: "ETF Monthly Contribution",
      amount: -500.00,
      date: "May 1, 2025",
      status: "completed",
      category: "investment",
      cardLast4: "4567"
    },
    {
      id: 'tx4',
      name: "Subscription - Premium Plan",
      amount: -29.99,
      date: "April 30, 2025",
      status: "completed",
      category: "subscription",
      cardLast4: "8901"
    },
    {
      id: 'tx5',
      name: "Bitcoin Purchase",
      amount: -750.00,
      date: "April 28, 2025",
      status: "processing",
      category: "crypto",
      cardLast4: "4567"
    }
  ];

  const paymentMethods = [
    {
      id: 'card1',
      type: "Visa",
      name: "Main Trading Card",
      last4: "4567",
      expiry: "09/26",
      default: true
    },
    {
      id: 'card2',
      type: "Mastercard",
      name: "Personal Card",
      last4: "8901",
      expiry: "05/27",
      default: false
    },
    {
      id: 'card3',
      type: "Bank Account",
      name: "Checking Account",
      last4: "2345",
      routing: "072453891",
      default: false
    }
  ];

  const [activeTab, setActiveTab] = React.useState("transactions");
  const [showAddCard, setShowAddCard] = React.useState(false);

  // Form state for adding new card
  const [newCard, setNewCard] = React.useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleAddCard = (e) => {
    e.preventDefault();
    
    // Simulate adding a card
    toast({
      title: "Card Added",
      description: "Your new payment method has been added successfully",
      duration: 3000,
    });
    
    setShowAddCard(false);
    setNewCard({
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen bg-altfolio-bg">
      <Sidebar />
      
      <div className="flex-1 overflow-x-hidden">
        <Header />
        
        <div className="p-6 space-y-8 pb-16 overflow-y-auto max-h-[calc(100vh-76px)]">
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-5 flex items-center">
              <span className="h-5 w-1 bg-altfolio-positive rounded-full mr-2"></span>
              Payment Management
            </h2>
            
            <div className="flex gap-4 mb-6">
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === 'transactions' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === 'payment-methods' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveTab('payment-methods')}
              >
                Payment Methods
              </button>
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === 'invoices' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveTab('invoices')}
              >
                Invoices
              </button>
            </div>
            
            {activeTab === 'transactions' && (
              <div className="bg-altfolio-card rounded-xl p-5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium">Recent Transactions</h3>
                  <div className="flex items-center gap-2">
                    <button className="text-xs px-3 py-1.5 bg-altfolio-highlight/30 hover:bg-altfolio-highlight/50 rounded-lg transition-colors flex items-center gap-1">
                      <FileText size={14} />
                      <span>Export</span>
                    </button>
                    <button className="text-xs px-3 py-1.5 bg-altfolio-highlight/30 hover:bg-altfolio-highlight/50 rounded-lg transition-colors flex items-center gap-1">
                      <Calendar size={14} />
                      <span>Date Range</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="p-4 rounded-lg bg-altfolio-bg hover:bg-altfolio-highlight/10 transition-colors">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${
                            transaction.category === 'investment' ? 'bg-blue-500/20 text-blue-500' :
                            transaction.category === 'income' ? 'bg-altfolio-positive/20 text-altfolio-positive' :
                            transaction.category === 'crypto' ? 'bg-purple-500/20 text-purple-500' :
                            'bg-orange-500/20 text-orange-500'
                          }`}>
                            {transaction.category === 'investment' && <CreditCard size={16} />}
                            {transaction.category === 'income' && <ArrowRight size={16} />}
                            {transaction.category === 'crypto' && <CreditCard size={16} />}
                            {transaction.category === 'subscription' && <Clock size={16} />}
                          </div>
                          
                          <div>
                            <div className="font-medium text-sm">{transaction.name}</div>
                            <div className="text-xs text-gray-400 flex items-center gap-1">
                              {transaction.date} · {transaction.cardLast4 !== 'N/A' ? `Card ****${transaction.cardLast4}` : 'Direct deposit'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className={`font-medium ${transaction.amount > 0 ? 'text-altfolio-positive' : ''}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD'
                            })}
                          </div>
                          <div className="text-xs flex items-center justify-end gap-1">
                            <span className={`inline-block w-2 h-2 rounded-full ${
                              transaction.status === 'completed' ? 'bg-altfolio-positive' : 'bg-yellow-500'
                            }`}></span>
                            <span className="text-gray-400">
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                  <button className="text-sm flex items-center gap-1 px-3 py-1.5 hover:bg-altfolio-highlight/30 rounded-lg transition-colors">
                    <ArrowLeft size={16} />
                    <span>Previous</span>
                  </button>
                  
                  <div className="text-sm">Page 1 of 5</div>
                  
                  <button className="text-sm flex items-center gap-1 px-3 py-1.5 hover:bg-altfolio-highlight/30 rounded-lg transition-colors">
                    <span>Next</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'payment-methods' && (
              <div>
                <div className="bg-altfolio-card rounded-xl p-5 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Payment Methods</h3>
                    <button 
                      className="text-xs px-3 py-1.5 bg-altfolio-highlight hover:bg-altfolio-highlight/80 rounded-lg transition-colors flex items-center gap-1"
                      onClick={() => setShowAddCard(!showAddCard)}
                    >
                      <Plus size={14} />
                      <span>Add Method</span>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className={`p-4 rounded-lg ${method.default ? 'bg-altfolio-highlight/20 border border-altfolio-highlight/50' : 'bg-altfolio-bg'}`}>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-altfolio-highlight/20">
                              <CreditCard size={16} />
                            </div>
                            
                            <div>
                              <div className="font-medium text-sm">{method.name}</div>
                              <div className="text-xs text-gray-400">
                                {method.type} ending in {method.last4} {method.expiry ? `· Expires ${method.expiry}` : ''}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {method.default && (
                              <span className="bg-altfolio-positive/20 text-altfolio-positive text-xs px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                <Check size={12} />
                                <span>Default</span>
                              </span>
                            )}
                            <button className="p-1 rounded hover:bg-altfolio-highlight/30 transition-colors">
                              <ChevronDown size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {showAddCard && (
                  <div className="bg-altfolio-card rounded-xl p-5 animate-fade-in">
                    <h3 className="font-medium mb-4">Add Payment Method</h3>
                    <form onSubmit={handleAddCard}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="block text-sm text-gray-400 mb-1">Card Name</label>
                          <input 
                            type="text" 
                            name="cardName"
                            value={newCard.cardName}
                            onChange={handleInputChange}
                            placeholder="My Trading Card"
                            className="w-full p-2 rounded-lg bg-altfolio-bg border border-white/10 focus:outline-none focus:border-altfolio-highlight"
                            required
                          />
                        </div>
                        
                        <div className="col-span-2">
                          <label className="block text-sm text-gray-400 mb-1">Card Number</label>
                          <input 
                            type="text" 
                            name="cardNumber"
                            value={newCard.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-2 rounded-lg bg-altfolio-bg border border-white/10 focus:outline-none focus:border-altfolio-highlight"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Expiry Date</label>
                          <input 
                            type="text" 
                            name="expiry"
                            value={newCard.expiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full p-2 rounded-lg bg-altfolio-bg border border-white/10 focus:outline-none focus:border-altfolio-highlight"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">CVV</label>
                          <input 
                            type="text" 
                            name="cvv"
                            value={newCard.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full p-2 rounded-lg bg-altfolio-bg border border-white/10 focus:outline-none focus:border-altfolio-highlight"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2 mt-4">
                        <button 
                          type="button"
                          onClick={() => setShowAddCard(false)}
                          className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:bg-altfolio-highlight/20 transition-colors"
                        >
                          Cancel
                        </button>
                        <button 
                          type="submit"
                          className="px-4 py-2 text-sm rounded-lg bg-altfolio-positive text-black hover:bg-altfolio-positive/90 transition-colors"
                        >
                          Add Card
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'invoices' && (
              <div className="flex flex-col items-center justify-center p-10 bg-altfolio-card rounded-xl">
                <div className="p-4 rounded-full bg-altfolio-highlight/30 mb-4">
                  <FileText size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium">No invoices yet</h3>
                <p className="text-gray-400 text-sm mt-2">You don't have any invoices at the moment</p>
                <button className="mt-4 px-4 py-2 bg-altfolio-highlight hover:bg-altfolio-highlight/80 rounded-lg transition-colors flex items-center gap-2">
                  <Plus size={16} />
                  <span>Create Invoice</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
