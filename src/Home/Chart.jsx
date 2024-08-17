import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({className}) => {
  const data = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        data: [65, 59, 80, 81],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192)',
        fill: false,
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [28, 48, 40, 19],
        backgroundColor: 'rgba(153, 102, 255)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box maxWidth={250} className={className} sx={{backgroundColor: '#fff', borderRadius: '10px', p: 2}}>
      <Bar data={data} />
    </Box>
  );
};
