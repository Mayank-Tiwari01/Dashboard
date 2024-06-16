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
