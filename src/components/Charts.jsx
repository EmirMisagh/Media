import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'May',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Jan',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Apr',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Agu',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'May',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Jan',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Apr',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Agu',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className='Chart'>
        <h3 className='chartTitle'>Sales Analytics</h3>
        <ResponsiveContainer width='90%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd' />
                <Line type='monotone' dataKey='Active User' stroke='#b8860b' />
                <Line type='monotone' dataKey='pv' stroke='#aa4141' />
                <Tooltip/>
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

