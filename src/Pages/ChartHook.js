import React, { useEffect, useRef,useState } from 'react';
import Chartjs from 'chart.js';




const ChartHook = ({param}) => {
  const his={
    RunnyNose:param.Runny_Nose,
    DryCough:param.Dry_Cough,
    Fever:param.Fever,
    BreathingDiffculty:param.Breathing_Diffculty,
    Tiredness:param.Tiredness,
    SoreThroat:param.Sore_throat,
    Bodyache:param.Body_ache,
    date:param.date
  }

  const chartConfig = {
    type: 'bar',
    data: {
      labels: ["Runny Nose", "Dry Cough", "Fever", "Breathing Diffculty", "Tiredness", "Sorethroat","Bodyache"],
      datasets: [
        {
          label: his.date,
          data: [his.RunnyNose, his.DryCough, his.Fever, his.BreathingDiffculty, his.Tiredness, his.SoreThroat,his.Bodyache],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 55, 64, 0.2)",
            "rgba(255,155,89,0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255,155,89,1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100  
            }
          }
        ]
      }
    }
  };



  
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default ChartHook;