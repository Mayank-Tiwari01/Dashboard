import React from 'react';
import ACVRangeChart from './Components/ACVRangeChart';
import CustomerTypeChart from './Components/CustomerTypeChart';
import TeamChart from './Components/TeamChart';
import CustomerTypeDoughnutChart from './Components/CustomerTypeDoughnutChart';
import AccountIndustryAreaChart from './Components/AccountIndustryAreaChart';

const App = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>ACV Range</h2>
      <ACVRangeChart />
      <h2>Customer Type (Bar Chart)</h2>
      <CustomerTypeChart />
      <h2>Customer Type (Doughnut Chart)</h2>
      <CustomerTypeDoughnutChart />
      <h2>Team Performance</h2>
      <TeamChart />
      <h2>Account Industry (Area Chart)</h2>
      <AccountIndustryAreaChart />
    </div>
  );
};

export default App;
