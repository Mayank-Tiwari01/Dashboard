/*
 * For a detailed and comprehensive explanation of the code,
 * please refer to './Code_Explanation_And_Breakdown/Component_Exp' followed by the component name.
 */

import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const DataCard = ({ title, children }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      {children}
    </CardContent>
  </Card>
);

export default DataCard;
