import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar.js'

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);//spread operator is used to pull out values in array to compute maximum

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    label={dataPoint.label} 
                    maxValue={totalMaximum} 
                />)}
        </div>
    )
}

export default Chart