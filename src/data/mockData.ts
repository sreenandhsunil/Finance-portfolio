
// Generate mock data for asset cards sparkline
export const generateSparklineData = (trend: 'up' | 'down') => {
  const data = [];
  const pointCount = 20;
  
  for (let i = 0; i < pointCount; i++) {
    let value;
    
    if (trend === 'up') {
      // Upward trend with some noise
      value = 25 + (i * 1.5) + (Math.random() * 8 - 4);
    } else {
      // Downward trend with some noise
      value = 50 - (i * 1.5) + (Math.random() * 8 - 4);
    }
    
    data.push({
      value: Math.max(0, value)
    });
  }
  
  return data;
};

// Portfolio asset data
export const portfolioAssets = [
  {
    id: 1,
    type: 'cash',
    amount: '$1000',
    chartData: generateSparklineData('up'),
    trend: 'up' as const,
  },
  {
    id: 2,
    type: 'bonds',
    amount: '$500',
    chartData: generateSparklineData('up'),
    trend: 'up' as const,
  },
  {
    id: 3,
    type: 'equities',
    amount: '$300',
    chartData: generateSparklineData('up'),
    trend: 'up' as const,
  },
  {
    id: 4,
    type: 'crypto',
    amount: '$250',
    chartData: generateSparklineData('down'),
    trend: 'down' as const,
  },
  {
    id: 5,
    type: 'liquidFund',
    amount: '$150',
    chartData: generateSparklineData('down'),
    trend: 'down' as const,
  },
  {
    id: 6,
    type: 'largeCap',
    amount: '$500',
    chartData: generateSparklineData('up'),
    trend: 'up' as const,
  },
];

// Order book data
export const orderBookData = [
  { price: 242.15, quantity: 4296, total: 372890.43 },
  { price: 243.35, quantity: 104, total: 117122.23 },
  { price: 242.35, quantity: 3210, total: 74962.33 },
  { price: 244.15, quantity: 4173, total: 38324.84 },
  { price: 242.15, quantity: 662, total: 17021.33 },
  { price: 242.25, quantity: 1, total: 17021.33 },
  { price: 240.05, quantity: 1750, total: 37923.34 },
  { price: 241.35, quantity: 1002, total: 37846.35 },
  { price: 243.35, quantity: 3241, total: 37871.05 },
];
