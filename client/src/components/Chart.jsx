import React from 'react';
import { useSelector } from 'react-redux';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

const Chart = () => {
  const navigate = useNavigate();

  const allPlayers = useSelector((state) => state.rootReducer.tourOne.players);
  const maleNum = allPlayers.filter((player) => player.sex !== 'f').length;
  const femaleNum = allPlayers.filter((player) => player.sex !== 'm').length;

  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Players Distribution by Gender',
        data: [maleNum, femaleNum],
        backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Players Distribution by Gender',
        font: {
          size: 35,
        },
      },
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        padding: 10,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <>
      <div className='doughbut-back'>
        <button
          className='btn btn-outline-secondary'
          onClick={() => navigate('/tours/:id/allplayers')}
        >
          Back
        </button>
      </div>
      <div className='doughbut-chart'>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default Chart;
