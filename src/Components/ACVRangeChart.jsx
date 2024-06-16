/*
 * For a detailed and comprehensive explanation of the code,
 * please refer to './Code_Explanation_And_Breakdown/Component_Exp' followed by the component name.
 */

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import acvRangeData from '../data/acvRange.json';

const ACVRangeChart = () => {
  return (
    <BarChart width={900} height={400} data={acvRangeData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="closed_fiscal_quarter" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="acv" fill="#8884d8" />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
};

export default ACVRangeChart;
