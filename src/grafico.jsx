import { Flex } from "@chakra-ui/react";
import React from "react";
import { ResponsivePie } from '@nivo/pie'

export function Grafico() {

  const options = {

    responsive: true,
    maintainAspectRatio: false,
    layout: {
      autoPadding: true,
    },
    plugins: {
      datalabels: {
        color: 'black',
        font: { weight: 'normal', size: 11 },
        // clamp: true,
        // clip: true,
        }
      },
      legend: {
        align: 'center',
        position: 'bottom',
        display: true,
        textAlign: 'left',

        labels: {
          boxWidth: 15,
          boxHeight: 15,
          color: 'black'
        }
      }
    }

  const data = {

    labels: 'teste',

    datasets: [
      {
        labels: 'X',
        // ['50', '35', '10', '26', '78','51', '32', '11', '21', '71', '35', '13', '31', '22', '17']
        data: ['50', '35', '10', '26', '78'],
        backgroundColor: [
          'rgba(255, 255, 0, 0.5)', 'rgba(100, 100, 0, 0.5)',
          'rgba(131, 155, 107, 0.5)', 'rgba(100, 255, 100, 0.5)',
          'rgba(100, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)',
          'rgba(150, 10, 80, 0.5)', 'rgba(12, 12, 12, 0.5)',
          'rgba(255, 99, 132, 0.5)', 'rgba(150, 246, 255, 0.5)'],

        borderWidth: 1,
      },
    ],
  };


  return (
    <Flex w='100%' h='52vh'>
      <h1>titulo do grafico</h1>
      <Flex w='100%' h='100%' bg='lightblue'>
        <ResponsivePie options={options} data={data} />
      </Flex>
    </Flex>
  )
}