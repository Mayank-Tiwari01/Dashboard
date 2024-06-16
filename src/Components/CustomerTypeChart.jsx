/*
 * For a detailed and comprehensive explanation of the code,
 * please refer to './Code_Explanation_And_Breakdown/Component_Exp' followed by the component name.
 */

import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import customerTypeData from '../data/customerType.json';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomerTypeChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={customerTypeData}
        dataKey="acv"
        nameKey="Cust_Type"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {customerTypeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomerTypeChart;
