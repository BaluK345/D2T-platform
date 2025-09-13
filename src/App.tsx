import React, { useState } from 'react';
import { 
  Smartphone, 
  Coins, 
  TrendingUp, 
  Zap, 
  Shield, 
  CreditCard, 
  Users, 
  BarChart3,
  ArrowUpRight,
  ArrowDownLeft,
  Globe,
  Wallet,
  RefreshCw,
  Phone,
  Tv,
  DollarSign,
  Clock,
  ChevronRight,
  Menu,
  X,
  Bell,
  Settings,
  User,
  PieChart,
  Activity,
  Plus,
  Minus,
  CheckCircle,
  AlertCircle,
  Eye,
  Copy,
  ExternalLink,
  Database,
  Link,
  Calculator,
  Sparkles,
  ShoppingCart,
  History,
  QrCode
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('registration');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [registrationStep, setRegistrationStep] = useState(1);
  const [isWalletCreated, setIsWalletCreated] = useState(false);

  // Sample user data
  const userData = {
    name: "Balu Kumar",
    phone: "+91 98765 43210",
    email: "balu.kumar@email.com",
    walletAddress: "0x742d35Cc6634C0532925a3b8D4ba2dD4E23df6C2",
    dataUsed: 3.0,
    dataTotal: 5.0,
    unusedData: 2.0,
    tokensBalance: 47,
    tokensFromLastConversion: 20,
    conversionRate: 10, // tokens per GB
    totalEarned: 156
  };

  const recentTransactions = [
    { 
      id: 'tx001',
      type: 'mint', 
      amount: 20, 
      description: '2 GB unused data converted to tokens', 
      time: '2 hours ago', 
      status: 'completed',
      hash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
      gasUsed: '0.0012 MATIC'
    },
    { 
      id: 'tx002',
      type: 'redeem', 
      amount: -15, 
      description: 'Mobile recharge ₹75', 
      time: '1 day ago', 
      status: 'completed',
      hash: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234',
      gasUsed: '0.0008 MATIC'
    },
    { 
      id: 'tx003',
      type: 'trade', 
      amount: 12, 
      description: 'Sold to @user123', 
      time: '2 days ago', 
      status: 'completed',
      hash: '0x3c4d5e6f7890abcdef1234567890abcdef123456',
      gasUsed: '0.0015 MATIC'
    }
  ];

  // Registration & Wallet Creation
  const renderRegistration = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Step 1: User Account & Wallet</h2>
        <p className="text-blue-100">Register and get a blockchain wallet linked to your mobile number</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Registration Process</h3>
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    registrationStep >= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {registrationStep > step ? <CheckCircle className="h-4 w-4" /> : step}
                </div>
              ))}
            </div>
          </div>

          {registrationStep === 1 && (
            <div className="space-y-4">
              <h4 className="font-medium text-gray-800">Personal Information</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter your full name"
                    defaultValue={userData.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="+91 XXXXX XXXXX"
                    defaultValue={userData.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="your.email@example.com"
                    defaultValue={userData.email}
                  />
                </div>
              </div>
              <button 
                onClick={() => setRegistrationStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Continue to Verification
              </button>
            </div>
          )}

          {registrationStep === 2 && (
            <div className="space-y-4">
              <h4 className="font-medium text-gray-800">Mobile Verification</h4>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">OTP sent to {userData.phone}</p>
                    <p className="text-xs text-blue-600">Please enter the 6-digit code</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                  />
                ))}
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setRegistrationStep(1)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setRegistrationStep(3)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}

          {registrationStep === 3 && (
            <div className="space-y-4">
              <h4 className="font-medium text-gray-800">Blockchain Wallet Creation</h4>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Mobile number verified successfully!</p>
                    <p className="text-xs text-green-600">Creating your blockchain wallet...</p>
                  </div>
                </div>
              </div>
              
              {!isWalletCreated ? (
                <div className="text-center py-8">
                  <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">Generating secure wallet on Polygon network...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Wallet className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Wallet Created Successfully!</p>
                        <p className="text-sm text-green-600">Your wallet is now linked to {userData.phone}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Wallet Address:</p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-sm text-gray-800">{userData.walletAddress}</p>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab('data-calculation')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Continue to Data Tracking
                  </button>
                </div>
              )}
              
              {!isWalletCreated && (
                <button 
                  onClick={() => setIsWalletCreated(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Create Wallet
                </button>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Wallet Features</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Secure & Private</p>
                  <p className="text-sm text-gray-600">Your wallet is secured with industry-standard encryption</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Link className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Mobile Linked</p>
                  <p className="text-sm text-gray-600">Directly connected to your mobile number for easy access</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Polygon Network</p>
                  <p className="text-sm text-gray-600">Low gas fees and fast transactions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Notice</h3>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Keep Your Wallet Safe</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    Never share your private key or seed phrase with anyone. 
                    D2T Platform will never ask for this information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Data Wastage Calculation
  const renderDataCalculation = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Step 2: Data Wastage Calculation</h2>
        <p className="text-green-100">Telecom operator API provides your unused data information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Data Usage Analysis</h3>
            <Database className="h-5 w-5 text-gray-500" />
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray={`${(userData.dataUsed / userData.dataTotal) * 100}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">{userData.dataUsed}GB</p>
                    <p className="text-xs text-gray-500">Used</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">out of {userData.dataTotal}GB total plan</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-blue-800">Data Used</span>
                </div>
                <span className="font-bold text-blue-600">{userData.dataUsed} GB</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="font-medium text-green-800">Unused Data</span>
                </div>
                <span className="font-bold text-green-600">{userData.unusedData} GB</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="font-medium text-gray-800">Total Plan</span>
                </div>
                <span className="font-bold text-gray-600">{userData.dataTotal} GB</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-800 font-medium">Ready for Conversion</p>
                  <p className="text-2xl font-bold text-orange-600">{userData.unusedData} GB</p>
                  <p className="text-sm text-orange-700">≈ {userData.unusedData * userData.conversionRate} DATA Tokens</p>
                </div>
                <button 
                  onClick={() => setActiveTab('token-minting')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Convert Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Telecom Integration</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800">API Connected</span>
                </div>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Operator</span>
                  <span className="font-medium">Airtel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan Type</span>
                  <span className="font-medium">Postpaid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Billing Cycle</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium">2 mins ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Conversion Calculator</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Conversion Rate</span>
                  <Calculator className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">1 GB = {userData.conversionRate} Tokens</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Unused Data:</span>
                  <span className="font-medium">{userData.unusedData} GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tokens to Mint:</span>
                  <span className="font-medium">{userData.unusedData * userData.conversionRate} DATA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Value:</span>
                  <span className="font-medium">₹{userData.unusedData * userData.conversionRate * 5}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Token Minting
  const renderTokenMinting = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Step 3: Token Minting</h2>
        <p className="text-purple-100">Smart contract mints tokens and credits them to your wallet</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Minting Process</h3>
            <Sparkles className="h-5 w-5 text-gray-500" />
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Ready to Mint</h4>
              <p className="text-3xl font-bold text-purple-600 mb-1">{userData.unusedData * userData.conversionRate}</p>
              <p className="text-sm text-gray-600">DATA Tokens from {userData.unusedData} GB unused data</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Unused Data</span>
                <span className="font-semibold">{userData.unusedData} GB</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="font-semibold">1 GB = {userData.conversionRate} Tokens</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <span className="text-purple-800 font-medium">Tokens to Mint</span>
                <span className="font-bold text-purple-600">{userData.unusedData * userData.conversionRate} DATA</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <span className="text-green-800 font-medium">Estimated Value</span>
                <span className="font-bold text-green-600">₹{userData.unusedData * userData.conversionRate * 5}</span>
              </div>
            </div>

            <button 
              onClick={() => setActiveTab('token-usage')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-lg font-medium transition-all transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Mint Tokens</span>
              </div>
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Smart Contract Details</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Contract Address</span>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm text-gray-800">0xABC123...DEF789</p>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Network</span>
                  <span className="font-medium">Polygon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Token Standard</span>
                  <span className="font-medium">ERC-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gas Fee</span>
                  <span className="font-medium text-green-600">~₹0.02</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Confirmation Time</span>
                  <span className="font-medium">~30 seconds</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Minting History</h3>
            <div className="space-y-3">
              {[
                { date: 'Today', amount: 20, data: 2.0 },
                { date: 'Yesterday', amount: 15, data: 1.5 },
                { date: '2 days ago', amount: 25, data: 2.5 }
              ].map((mint, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{mint.amount} DATA</p>
                    <p className="text-sm text-gray-500">{mint.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{mint.data} GB</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Minted
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Token Usage
  const renderTokenUsage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Step 4: Token Usage</h2>
        <p className="text-orange-100">Redeem tokens for recharge, bills, subscriptions, or trade in marketplace</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Redemption Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl cursor-pointer transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Mobile Recharge</h4>
                    <p className="text-sm text-blue-600">Top up your mobile balance</p>
                    <p className="text-xs text-blue-500 mt-1">Rate: 5 DATA = ₹25</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 hover:bg-yellow-100 p-6 rounded-xl cursor-pointer transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Electricity Bill</h4>
                    <p className="text-sm text-yellow-600">Pay your utility bills</p>
                    <p className="text-xs text-yellow-500 mt-1">Rate: 4 DATA = ₹20</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 hover:bg-purple-100 p-6 rounded-xl cursor-pointer transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Tv className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">OTT Subscriptions</h4>
                    <p className="text-sm text-purple-600">Netflix, Prime, Hotstar</p>
                    <p className="text-xs text-purple-500 mt-1">Rate: 6 DATA = ₹30</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 hover:bg-green-100 p-6 rounded-xl cursor-pointer transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">P2P Trading</h4>
                    <p className="text-sm text-green-600">Trade with other users</p>
                    <p className="text-xs text-green-500 mt-1">Market rate: ₹5.1/token</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Redemption</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Mobile Recharge</option>
                    <option>Electricity Bill</option>
                    <option>OTT Subscription</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tokens Required</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-800">10 DATA</p>
                    <p className="text-sm text-gray-500">for ₹50 recharge</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Redeem Tokens
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Balance</h3>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="h-10 w-10 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-800 mb-2">{userData.tokensBalance}</p>
              <p className="text-gray-500 mb-4">DATA Tokens</p>
              <p className="text-lg font-semibold text-green-600">≈ ₹{userData.tokensBalance * 5.1}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tokens Earned</span>
                <span className="font-semibold text-green-600">+{userData.totalEarned}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tokens Spent</span>
                <span className="font-semibold text-red-600">-{userData.totalEarned - userData.tokensBalance}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Balance</span>
                <span className="font-semibold text-blue-600">{userData.tokensBalance}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Redemptions</h3>
            <div className="space-y-3">
              {recentTransactions.filter(tx => tx.type === 'redeem').map((tx, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{Math.abs(tx.amount)} DATA</p>
                    <p className="text-sm text-gray-500">{tx.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{tx.description}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Blockchain Transparency
  const renderBlockchainTransparency = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Step 5: Blockchain Transparency</h2>
        <p className="text-indigo-100">All transactions stored on-chain for security and auditability</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
            <History className="h-5 w-5 text-gray-500" />
          </div>

          <div className="space-y-4">
            {recentTransactions.map((tx, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      tx.type === 'mint' ? 'bg-green-100 text-green-600' :
                      tx.type === 'redeem' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {tx.type === 'mint' ? <Plus className="h-4 w-4" /> :
                       tx.type === 'redeem' ? <Minus className="h-4 w-4" /> :
                       <Users className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 capitalize">{tx.type}</p>
                      <p className="text-sm text-gray-500">{tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${tx.amount > 0 ? 'text-green-600' : 'text-blue-600'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount} DATA
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {tx.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">{tx.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Transaction Hash:</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-blue-600">{tx.hash.slice(0, 10)}...{tx.hash.slice(-8)}</span>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Copy className="h-3 w-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Gas Used:</span>
                    <span className="text-gray-600">{tx.gasUsed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Blockchain Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Network</span>
                </div>
                <span className="font-semibold text-blue-600">Polygon</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Total Transactions</span>
                </div>
                <span className="font-semibold text-green-600">1,247</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-purple-800">Success Rate</span>
                </div>
                <span className="font-semibold text-purple-600">99.8%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-orange-800">Avg. Confirmation</span>
                </div>
                <span className="font-semibold text-orange-600">28 seconds</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Smart Contract Info</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Contract Address</span>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="font-mono text-sm text-gray-800">0xABC123...DEF789</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Token Standard</span>
                  <span className="font-medium">ERC-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-medium">1,000,000 DATA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Circulating Supply</span>
                  <span className="font-medium">247,891 DATA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contract Verified</span>
                  <span className="font-medium text-green-600">✓ Yes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Features</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Immutable Records</p>
                  <p className="text-sm text-gray-600">All transactions permanently recorded</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Full Transparency</p>
                  <p className="text-sm text-gray-600">Public blockchain explorer access</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Smart Contract Audited</p>
                  <p className="text-sm text-gray-600">Security verified by experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const navigation = [
    { id: 'registration', name: 'Registration & Wallet', icon: User, step: 1 },
    { id: 'data-calculation', name: 'Data Calculation', icon: Database, step: 2 },
    { id: 'token-minting', name: 'Token Minting', icon: Coins, step: 3 },
    { id: 'token-usage', name: 'Token Usage', icon: ShoppingCart, step: 4 },
    { id: 'blockchain-transparency', name: 'Blockchain Transparency', icon: Shield, step: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                D2T Platform
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{userData.name}</p>
                  <p className="text-xs text-gray-500">{userData.phone}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <button 
              className="md:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-b">
          <div className="px-4 py-3 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeTab === item.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.step}
                  </div>
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-80 bg-white rounded-2xl shadow-lg p-6 h-fit">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">D2T Workflow</h2>
              <p className="text-sm text-gray-600">Complete the 5-step process to convert your unused data to tokens</p>
            </div>
            
            <nav className="space-y-3">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-4 text-left rounded-xl transition-all duration-200 ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-[1.02]' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeTab === item.id ? 'bg-white bg-opacity-20 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {item.step}
                    </div>
                    <item.icon className="h-5 w-5" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className={`text-xs ${activeTab === item.id ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                        Step {item.step}
                      </p>
                    </div>
                  </div>
                  {activeTab === item.id && <ChevronRight className="h-4 w-4 ml-auto" />}
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">Secured by</p>
                  <p className="text-xs text-green-600">Polygon Blockchain</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'registration' && renderRegistration()}
            {activeTab === 'data-calculation' && renderDataCalculation()}
            {activeTab === 'token-minting' && renderTokenMinting()}
            {activeTab === 'token-usage' && renderTokenUsage()}
            {activeTab === 'blockchain-transparency' && renderBlockchainTransparency()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;