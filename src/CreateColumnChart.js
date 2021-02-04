import React from 'react';
import Bar from './Bar';

const CreateColumnChart = ({ obj }) => {
  const { width, height, data, defaultColor, categories, x_axis_label, y_axis_label } = obj;
  const barWidth = 60;
  let col = defaultColor;

  const barsList = (data).map(({ color, value }, index) => {
    col = (color || defaultColor);
    return <Bar margin={height - value} content={categories[index]} key={index} height={value} width={barWidth} color={col} />
  })

  return (
    <div>
      <div id="chart">
        <div id="side-label" style={{ "height": `${height}px` }}>
          {y_axis_label}
        </div>
        <div id="boundary" className="flex-container" style={{ "height": `${height}px`, "width": `${width}px` }}>
          {barsList}
        </div>
      </div>
      <div id="bottom-label">
        {x_axis_label}
      </div>
    </div>
  )
}

export default CreateColumnChart;