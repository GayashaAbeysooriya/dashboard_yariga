'use client';

import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DashboardCardProps {
  title: string;
  value: number;
  colors: string[];
  series: number[];
}

const PieCharts = ({ title, value, colors, series }: DashboardCardProps) => {
  return (
    <Box
      bgcolor="#fff"
      borderRadius="15px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width="240px"
      boxShadow="0 2px 6px rgba(0,0,0,0.05)"
    >
      <Box>
        <Typography fontSize={14} color="text.secondary">
          {title}
        </Typography>
        <Typography fontSize={24} fontWeight={600}>
          {value.toLocaleString()}
        </Typography>
      </Box>

      <Box width="60px" height="60px">
        <ReactApexChart
          options={{
            chart: { type: 'donut' },
            colors: colors,
            dataLabels: { enabled: false },
            legend: { show: false },
            stroke: { show: false },
          }}
          series={series}
          type="donut"
          width="60"
        />
      </Box>
    </Box>
  );
};

export default PieCharts;
