import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Custom color palette aligned with Beats branding - updated to dark purple theme
const COLORS = ['#6A0DAD', '#4B0082', '#663399', '#7B68EE', '#9370DB', '#BA55D3', '#D8BFD8'];
const CHART_COLORS = {
  primary: '#6A0DAD',
  secondary: '#4B0082',
  tertiary: '#663399'
};

const DashboardSection = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
    {children}
  </div>
);

const ChartCard = ({ title, chart, insights }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2 text-gray-700">{title}</h3>
    <div className="h-64 mb-4">
      {chart}
    </div>
    <div className="text-sm text-gray-600">
      <h4 className="font-medium mb-1">Key Insights:</h4>
      <p>{insights}</p>
    </div>
  </div>
);

const formatValue = (value) => {
  if (typeof value === 'number') {
    return value % 1 === 0 ? value : value.toFixed(1);
  }
  return value;
};

export default function BeatsSurveyDashboard() {
  // Important Features Data
  const importantFeaturesData = {
    title: "Rating Important Features (1-5)",
    labels: [
      "Battery Life",
      "Connectivity Options",
      "Sound Quality",
      "Price",
      "Design/Looks",
      "Durability"
    ],
    values: [3.5364, 3.5279, 3.4975, 3.5552, 3.4420, 3.4382]
  };

  // Price Preferences Data
  const pricePreferencesData = {
    title: "Price Point Preferences",
    labels: [
      "Less than $50",
      "$50 to $100",
      "$100 to $200",
      "$200 to $300",
      "More than $300"
    ],
    values: [31.99, 34.69, 23.30, 6.75, 3.27]
  };

  // Purchasing Channels Data
  const purchasingChannelsData = {
    title: "Purchasing Channels Preferences",
    labels: [
      "Large multi-brand stores (e.g., Amazon)",
      "Multi-brand electronics stores",
      "Department stores",
      "Brand websites"
    ],
    values: [45.02, 21.00, 18.21, 13.77]
  };

  // Purchase Factors Data
  const purchaseFactorsData = {
    title: "Rating Factors Influencing Purchase Decision (1-5)",
    labels: [
      "Recommendations",
      "Online Reviews",
      "Expert Reviews",
      "Brand Reputation",
      "Price",
      "Specific Features",
      "Advertising"
    ],
    values: [3.15, 3.34, 3.29, 3.51, 3.53, 3.24, 2.69]
  };

  // Brand Recognition Data
  const brandRecognitionData = {
    title: "Top Brand Mentions",
    labels: ["JBL", "Bose", "Sony", "Samsung", "Marshall"],
    values: [1959, 1006, 775, 469, 188]
  };

  // Age Distribution Data
  const ageDistributionData = {
    title: "Age Distribution of Survey Respondents",
    labels: [
      "Under 18",
      "18-24",
      "25-34",
      "35-44",
      "45-54",
      "55-64",
      "65 and over"
    ],
    values: [4.44, 67.95, 18.26, 4.25, 3.46, 1.40, 0.25]
  };

  // Gender Distribution Data
  const genderDistributionData = {
    title: "Gender Distribution of Survey Respondents",
    labels: [
      "Female",
      "Male",
      "Non-binary/Third gender",
      "Prefer not to say"
    ],
    values: [52.22, 45.09, 1.20, 1.49]
  };

  // Income Distribution Data
  const incomeDistributionData = {
    title: "Annual Household Income Distribution",
    labels: [
      "Prefer not to say",
      "Less than $25,000",
      "$25,000-$50,000",
      "$50,000-$75,000",
      "$75,000-$100,000",
      "More than $100,000"
    ],
    values: [30.98, 23.11, 13.67, 10.02, 8.28, 13.95]
  };

  // Transform data for charts
  const transformToChartData = (labels, values) => {
    return labels.map((label, index) => ({
      name: label,
      value: values[index]
    }));
  };

  const importantFeaturesChartData = transformToChartData(
    importantFeaturesData.labels,
    importantFeaturesData.values
  );

  const pricePreferencesChartData = transformToChartData(
    pricePreferencesData.labels,
    pricePreferencesData.values
  );

  const purchasingChannelsChartData = transformToChartData(
    purchasingChannelsData.labels,
    purchasingChannelsData.values
  );

  const purchaseFactorsChartData = transformToChartData(
    purchaseFactorsData.labels,
    purchaseFactorsData.values
  );

  const brandRecognitionChartData = transformToChartData(
    brandRecognitionData.labels,
    brandRecognitionData.values
  );

  const [activeTab, setActiveTab] = useState('demographics');

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center mb-4">
          <div className="bg-gray-800 p-2 rounded-full mr-3">
            <div className="w-8 h-8 bg-purple-800 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Beats by Dr. Dre</h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">Wireless Speaker Market Research Dashboard</h2>
        <p className="text-gray-600">Based on 3,154 valid survey responses</p>
      </header>

      {/* Final Recommendation */}
      <DashboardSection title="Executive Summary & Recommendation">
        <div className="bg-purple-50 border-l-4 border-purple-800 p-4 mb-4">
          <h3 className="font-bold text-purple-800 mb-2">Recommendation: Launch a Premium Wireless Speaker</h3>
          <p className="text-gray-800">
            Based on our comprehensive market research, we recommend that Beats by Dr. Dre launches a new high-fidelity wireless 
            speaker targeting the $50-$100 price range with a premium option up to $150. The speaker should offer superior sound quality, 
            extended battery life, and versatile connectivity options. The product should be marketed primarily to 18-34 year-old consumers 
            through Amazon and other large multi-brand retailers, emphasizing the brand's reputation for premium audio and positioning 
            against top competitors like JBL and Bose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold text-gray-700 mb-2">Key Target Audience</h3>
            <p className="text-gray-600">18-34 year-olds (86% of respondents) with mixed income levels, with slightly more female representation.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold text-gray-700 mb-2">Ideal Price Point</h3>
            <p className="text-gray-600">$50-$100 range, capturing 35% of market, with premium option up to $150 to maintain brand positioning.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold text-gray-700 mb-2">Must-Have Features</h3>
            <p className="text-gray-600">Superior battery life, versatile connectivity options, exceptional sound quality, and durable design.</p>
          </div>
        </div>
      </DashboardSection>

      {/* Navigation Tabs */}
      <div className="flex mb-6 overflow-x-auto">
        <button 
          className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'demographics' ? 'bg-white text-purple-800 border-t border-l border-r border-gray-200' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setActiveTab('demographics')}
        >
          Demographics
        </button>
        <button 
          className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'features' ? 'bg-white text-purple-800 border-t border-l border-r border-gray-200' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setActiveTab('features')}
        >
          Important Features
        </button>
        <button 
          className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'purchasing' ? 'bg-white text-purple-800 border-t border-l border-r border-gray-200' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setActiveTab('purchasing')}
        >
          Purchasing Factors
        </button>
        <button 
          className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'price' ? 'bg-white text-purple-800 border-t border-l border-r border-gray-200' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setActiveTab('price')}
        >
          Price Points
        </button>
        <button 
          className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'channels' ? 'bg-white text-purple-800 border-t border-l border-r border-gray-200' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setActiveTab('channels')}
        >
          Purchase Channels
        </button>
        <button 
          className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'brands' ? 'bg-white text-purple-800 border-t border-l border-r border-gray-200' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setActiveTab('brands')}
        >
          Brand Recognition
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'demographics' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Survey Demographics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Age Distribution</h3>
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={transformToChartData(ageDistributionData.labels, ageDistributionData.values)}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {transformToChartData(ageDistributionData.labels, ageDistributionData.values).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-gray-600">
                  <p>The overwhelming majority (86%) of respondents fall between 18-34 years old, with the 18-24 segment dominating at 68%.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Gender Distribution</h3>
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={transformToChartData(genderDistributionData.labels, genderDistributionData.values)}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {transformToChartData(genderDistributionData.labels, genderDistributionData.values).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Survey respondents were fairly balanced with a slight female majority (52%), indicating broad appeal across genders.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Income Distribution</h3>
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={transformToChartData(incomeDistributionData.labels, incomeDistributionData.values)}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {transformToChartData(incomeDistributionData.labels, incomeDistributionData.values).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Income distribution is diverse with 31% preferring not to disclose and 23% reporting under $25,000, suggesting varied purchasing power.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <h3 className="font-bold text-gray-700 mb-2">Demographic Implications</h3>
              <p className="text-gray-600">
                The survey reached a young, digitally engaged audience that aligns well with Beats' typical target market. The balanced gender distribution 
                suggests that wireless speakers have broad appeal. The varied income levels indicate opportunity to target different price points, 
                with special focus on the value-conscious majority while still offering premium options for higher-income segments.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Important Features</h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={importantFeaturesChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[3, 4]} />
                  <Tooltip formatter={(value) => formatValue(value)} />
                  <Legend />
                  <Bar dataKey="value" fill={CHART_COLORS.primary} name="Importance Rating (1-5)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold text-gray-700 mb-2">Feature Analysis Insights</h3>
              <p className="text-gray-600 mb-3">
                All features received relatively similar importance ratings (3.4-3.6 out of 5), indicating consumers value a well-rounded product 
                rather than one standout feature. However, the marginal differences reveal that Price (3.56) and Battery Life (3.54) 
                are slightly more valued than Design/Looks (3.44) and Durability (3.44).
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Recommendation:</span> Beats should focus on creating a balanced product with competitive battery life and reasonable
                pricing while ensuring excellent sound quality and connectivity options. Marketing should emphasize these aspects while still maintaining
                the brand's signature attractive design.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'purchasing' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Purchasing Decision Factors</h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={purchaseFactorsChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[2, 4]} />
                  <Tooltip formatter={(value) => formatValue(value)} />
                  <Legend />
                  <Bar dataKey="value" fill={CHART_COLORS.primary} name="Importance Rating (1-5)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold text-gray-700 mb-2">Purchasing Decision Insights</h3>
              <p className="text-gray-600 mb-3">
                Price (3.53) and Brand Reputation (3.51) are the most influential factors in purchase decisions, followed by Online Reviews (3.34) 
                and Expert Reviews (3.29). Advertising (2.69) has notably less impact on purchasing decisions.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Recommendation:</span> Beats should leverage its strong brand reputation while ensuring competitive pricing.
                Marketing efforts should focus on generating positive reviews from both consumers and experts rather than traditional advertising.
                Consider influencer partnerships and review seeding programs to build credibility with the target audience.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'price' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Price Point Preferences</h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pricePreferencesChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${formatValue(value)}%`} />
                  <Legend />
                  <Bar dataKey="value" fill={CHART_COLORS.primary} name="Percentage of Respondents" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold text-gray-700 mb-2">Price Preference Insights</h3>
              <p className="text-gray-600 mb-3">
                The majority of respondents (67%) prefer wireless speakers priced under $100, with the $50-$100 range being most popular (35%). 
                Only 10% of respondents would pay more than $200, confirming consumer sentiment analysis that identified $150 as a psychological ceiling.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Recommendation:</span> Beats should position its new wireless speaker primarily in the $50-$100 price range
                to capture the largest market segment (35%). To maintain the premium brand positioning, Beats could offer a higher-end version up to $150
                with additional features, but should avoid exceeding this price point based on consumer sentiment analysis. This dual approach would effectively
                capture 58% of the market (the combined $50-$200 segments) while respecting price sensitivity.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'channels' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Purchasing Channels</h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={purchasingChannelsChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${formatValue(value)}%`} />
                  <Legend />
                  <Bar dataKey="value" fill={CHART_COLORS.primary} name="Percentage of Respondents" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold text-gray-700 mb-2">Purchasing Channel Insights</h3>
              <p className="text-gray-600 mb-3">
                Large multi-brand stores like Amazon strongly dominate purchasing preferences (45%), followed by multi-brand electronics 
                stores (21%) and department stores (18%). Brand websites account for only 14% of preferred purchase channels.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Recommendation:</span> Prioritize distribution through Amazon and other major online retailers,
                ensuring optimal product presentation, competitive pricing, and positive reviews. While maintaining direct sales through the Beats website,
                focus marketing resources on driving traffic to major retailer listings. Develop strong relationships with electronics retailers
                for in-store displays and promotions to capture the 21% who prefer these channels.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'brands' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Brand Recognition</h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={brandRecognitionChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatValue(value)} />
                  <Legend />
                  <Bar dataKey="value" fill={CHART_COLORS.primary} name="Number of Mentions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold text-gray-700 mb-2">Brand Recognition Insights</h3>
              <p className="text-gray-600 mb-3">
                JBL has dominant brand recognition (1,959 mentions), followed by Bose (1,006) and Sony (775). Samsung and Marshall trail 
                significantly. Notably, Beats is not among the top recognized brands for wireless speakers despite its strong presence in headphones.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Recommendation:</span> Position the new Beats wireless speaker directly against JBL's offerings in the
                $50-$100 range, highlighting Beats' superior sound quality and brand cachet. Leverage the existing Beats customer base from the headphone market
                to build awareness and credibility in the speaker category. Marketing should specifically address how Beats speakers outperform 
                JBL and Bose models in key areas valued by consumers.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        <p>Based on 3,154 valid survey responses collected in February 2025</p>
        <p className="mt-1">© 2025 Beats by Dr. Dre. Confidential market research.</p>
      </footer>
    </div>
  );
}
