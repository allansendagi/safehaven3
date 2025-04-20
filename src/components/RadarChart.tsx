"use client"

import { useState } from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const dataSet: Record<string, number[]> = {
  Qatar: [70, 65, 60, 55, 75, 50],
  USA: [85, 78, 70, 68, 80, 60],
  Estonia: [72, 80, 75, 63, 70, 70],
}

export default function RadarChart() {
  const [selected, setSelected] = useState('Qatar')

  const chartData = {
    labels: ['Governance', 'Citizen', 'Ethics', 'Economic', 'Tech/Data', 'Foresight'],
    datasets: [
      {
        label: selected,
        data: dataSet[selected],
        backgroundColor: 'rgba(0,52,89,0.2)',
        borderColor: 'rgba(0,52,89,0.8)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="flex flex-col items-center">
      <select
        className="border rounded px-3 py-2 mb-6"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {Object.keys(dataSet).map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div className="max-w-md w-full">
        <Radar data={chartData} />
      </div>
    </div>
  )
}