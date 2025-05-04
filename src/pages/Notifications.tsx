
import React from "react";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { useToast } from "@/components/ui/use-toast";
import { Bell, BellOff, Settings, CheckCheck } from "lucide-react";

const Notifications = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications",
      duration: 3000,
    });
  }, [toast]);

  const notifications = [
    {
      id: 1,
      title: "Portfolio Update",
      description: "Your portfolio has increased by 2.3% today.",
      time: "10 minutes ago",
      read: false,
      type: "success"
    },
    {
      id: 2,
      title: "Market Alert",
      description: "NASDAQ is down 1.5% in the last hour. Check your investments.",
      time: "1 hour ago",
      read: false,
      type: "warning"
    },
    {
      id: 3,
      title: "New Feature",
      description: "Auto Trading feature will be available next week.",
      time: "2 hours ago",
      read: true,
      type: "info"
    },
    {
      id: 4,
      title: "Account Security",
      description: "We noticed a login from a new device. Please verify it was you.",
      time: "Yesterday",
      read: true,
      type: "danger"
    },
    {
      id: 5,
      title: "Transaction Completed",
      description: "Your purchase of 10 AAPL shares was successful.",
      time: "2 days ago",
      read: true,
      type: "success"
    }
  ];

  const [activeTab, setActiveTab] = React.useState("all");
  const [notificationList, setNotificationList] = React.useState(notifications);

  const markAllAsRead = () => {
    setNotificationList(list => 
      list.map(item => ({ ...item, read: true }))
    );
    
    toast({
      title: "Success",
      description: "All notifications marked as read",
      duration: 2000,
    });
  };

  const markAsRead = (id) => {
    setNotificationList(list => 
      list.map(item => 
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const deleteNotification = (id) => {
    setNotificationList(list => 
      list.filter(item => item.id !== id)
    );
    
    toast({
      title: "Notification deleted",
      description: "The notification has been removed",
      duration: 2000,
    });
  };

  const filteredNotifications = activeTab === "all" 
    ? notificationList 
    : activeTab === "unread" 
      ? notificationList.filter(n => !n.read) 
      : notificationList.filter(n => n.read);

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
                Notifications
              </h2>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={markAllAsRead} 
                  className="flex items-center gap-1 px-3 py-1.5 bg-altfolio-highlight/30 hover:bg-altfolio-highlight/50 rounded-lg text-sm transition-colors"
                >
                  <CheckCheck size={16} />
                  <span>Mark all as read</span>
                </button>
                <button className="p-1.5 rounded-full bg-altfolio-highlight/20 hover:bg-altfolio-highlight/40 transition-colors text-gray-300 hover:text-white">
                  <Settings size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 mb-6">
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === 'all' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === 'unread' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveTab('unread')}
              >
                Unread
              </button>
              <button 
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === 'read' ? 'bg-altfolio-highlight text-white' : 'hover:bg-altfolio-highlight/30'}`}
                onClick={() => setActiveTab('read')}
              >
                Read
              </button>
            </div>
            
            <div className="space-y-4">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-xl bg-altfolio-card border-l-4 transition-all hover:shadow-md ${!notification.read ? 'border-l-altfolio-positive' : 'border-l-gray-500'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${
                        notification.type === 'success' ? 'bg-altfolio-positive/20 text-altfolio-positive' :
                        notification.type === 'warning' ? 'bg-yellow-500/20 text-yellow-500' :
                        notification.type === 'danger' ? 'bg-altfolio-negative/20 text-altfolio-negative' :
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        <Bell size={18} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className={`font-medium ${!notification.read ? 'text-white' : 'text-gray-300'}`}>
                            {notification.title}
                          </h3>
                          <span className="text-xs text-gray-400">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{notification.description}</p>
                        
                        <div className="flex justify-end mt-2 gap-2">
                          {!notification.read && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs px-2 py-1 rounded bg-altfolio-highlight/30 hover:bg-altfolio-highlight/50 transition-colors"
                            >
                              Mark as read
                            </button>
                          )}
                          <button 
                            onClick={() => deleteNotification(notification.id)}
                            className="text-xs px-2 py-1 rounded bg-altfolio-negative/30 hover:bg-altfolio-negative/50 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center p-10 bg-altfolio-card rounded-xl">
                  <div className="p-4 rounded-full bg-altfolio-highlight/30 mb-4">
                    <BellOff size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium">No notifications</h3>
                  <p className="text-gray-400 text-sm mt-2">You don't have any {activeTab} notifications at the moment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
