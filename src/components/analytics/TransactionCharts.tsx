"use client";

import React from "react";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: 'Quarter 1' },
  { id: 1, value: 15, label: 'Quarter 2' },
  { id: 2, value: 20, label: 'Quarter 3' },
  { id: 3, value: 20, label: 'Quarter 4' },
];

const TransactionCharts = () => {
  return (
    <div>
    <div>
      <h1 className='mb-5 font-bold'>Transaction analytics</h1>
    </div>
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: "gray",
        },
      }}
      height={200}
      width={400}
    />
    </div>
    
  );
};

export default TransactionCharts;
