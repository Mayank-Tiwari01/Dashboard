/*
 * For a detailed and comprehensive explanation of the code,
 * please refer to './Code_Explanation_And_Breakdown/Component_Exp' followed by the component name.
 */

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import teamData from '../data/team.json';

const TeamChart = () => {
  return (
    <LineChart width={600} height={300} data={teamData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="closed_fiscal_quarter" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="acv" stroke="#8884d8" />
      <Line type="monotone" dataKey="count" stroke="#82ca9d" />
    </LineChart>
  );
};

export default TeamChart;
