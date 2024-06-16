import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import customerTypeData from '../data/customerType.json';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomerTypeDoughnutChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={customerTypeData}
        dataKey="acv"
        nameKey="Cust_Type"
        cx="50%"
        cy="50%"
        outerRadius={100}
        innerRadius={60}  // This makes it a doughnut chart
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

export default CustomerTypeDoughnutChart;
