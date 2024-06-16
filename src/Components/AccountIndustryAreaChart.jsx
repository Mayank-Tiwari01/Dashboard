import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import accountIndustryData from '../data/accountIndustry.json';
import { prepareAccountIndustryData } from '../utils/prepareAccountIndustryData';

const { finalData, industries } = prepareAccountIndustryData(accountIndustryData);

const colors = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#413ea0", "#ff0000", "#008080", "#0000ff",
  "#00ff00", "#800080", "#800000", "#00ced1", "#ff69b4", "#cd5c5c", "#4b0082"
];

const AccountIndustryAreaChart = () => {
  return (
    <AreaChart
      width={800}
      height={400}
      data={finalData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        {industries.map((industry, index) => (
          <linearGradient id={`color${industry}`} x1="0" y1="0" x2="0" y2="1" key={industry}>
            <stop offset="5%" stopColor={colors[index % colors.length]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors[index % colors.length]} stopOpacity={0} />
          </linearGradient>
        ))}
      </defs>
      <XAxis dataKey="closed_fiscal_quarter" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      {industries.map((industry, index) => (
        <Area
          type="monotone"
          dataKey={industry}
          stroke={colors[index % colors.length]}
          fillOpacity={1}
          fill={`url(#color${industry})`}
          key={industry}
        />
      ))}
    </AreaChart>
  );
};

export default AccountIndustryAreaChart;
