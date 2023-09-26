// import React, { useEffect, useRef, useState } from 'react';
// import { Chart, registerables } from 'chart.js';
// import { getPlans } from '../../../DB/db';

// Chart.register(...registerables);

// const MyPieChart = () => {
//   const chartRef = useRef(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const res = await getPlans();
//       const ttl = res.length;

//       const { completed, uncompleted } = res.reduce(
//         (acc, curr) => {
//           if (curr.taskPlan.status === 'completed') {
//             acc.completed += 1;
//           } else {
//             acc.uncompleted += 1;
//           }
//           return acc;
//         },
//         { completed: 0, uncompleted: 0 }
//       );

//       setData([
//         { title: `${((completed / ttl) * 100).toFixed(2)}%`, value: completed, color: '#00ff00' },
//         { title: `${((uncompleted / ttl) * 100).toFixed(2)}%`, value: uncompleted, color: '#FF0000' },
//       ]);
//     };

//     getData();
//   }, []);

//   useEffect(() => {
//     if (data.length === 0) {
//       return;
//     }

//     const ctx = chartRef.current.getContext('2d');
//     const chart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: [`Completed - ${data[0].title}`, `Uncompleted - ${data[1].title}`],
//         datasets: [
//           {
//             label: 'Graph Dataset',
//             data: [data[0].value, data[1].value],
//             backgroundColor: ['#00ff00', '#FF0000'],
//             barPercentage: 0.5,
//           },
//         ],
//       },
//     });

//     return () => {
//       // Clean up the chart instance when the component unmounts
//       chart.destroy();
//     };
//   }, [data]);

//   return <canvas ref={chartRef} />;
// };

// export default MyPieChart;

import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { getPlans } from '../../../DB/db';

Chart.register(...registerables);

const MyBarChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getPlans();
      const ttl = res.length;

      const { completed, uncompleted } = res.reduce(
        (acc, curr) => {
          if (curr.taskPlan.status === 'completed') {
            acc.completed += 1;
          } else {
            acc.uncompleted += 1;
          }
          return acc;
        },
        { completed: 0, uncompleted: 0 }
      );

      setData([
        { title: 'Completed', value: completed, color: '#00ff00' },
        { title: 'Uncompleted', value: uncompleted, color: '#FF0000' },
      ]);
    };

    getData();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [data[0].title, data[1].title],
        datasets: [
          {
            label: 'Number of Submissions',
            data: [data[0].value, data[1].value],
            backgroundColor: [data[0].color, data[1].color],
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
              stepSize: 1,
            },
          },
        },
      },
    });

    return () => {
      // Clean up the chart instance when the component unmounts
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default MyBarChart;
