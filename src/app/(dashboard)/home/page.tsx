'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import PieCharts from '@/components/pieCharts';
import TotalRevenue from '@/components/TotalRevenue';
import PropertyReferals from '@/components/PropertyReferals';

function Page() {
  return (
    <Box p={4}>
      <Typography fontSize={25} fontWeight={700} mb={3}>
        Dashboard
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={3} width="100%" >
        <PieCharts title="Properties for Sale" value={1234} series={[70, 30]} colors={['#475be8', '#e4e8ef']} />
        <PieCharts title="Properties for Rent" value={560} series={[60, 40]} colors={['#fd8539', '#e4e8ef']} />
        <PieCharts title="Total Customer" value={980} series={[50, 50]} colors={['#2ed480', '#e4e8ef']} />
        <PieCharts title="Total City" value={334} series={[80, 20]} colors={['#fe6d8e', '#e4e8ef']} />
      </Box>

      <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}}>
        <TotalRevenue/>
        <PropertyReferals/>
      </Stack>
    </Box>
  );
}

export default Page;
