import React from 'react';
import Bar from './Bar';

const CreateColumnChart = (props) => {
  console.log(props);
  const w = props.obj.x_axis_label;
  const h = props.obj.y_axis_label;
  const barWidth = 60;

  const styleBoundary = {
    "height": h + "px",
    "width": w + "px"
  }

  let barsList = (props.obj.data).map((barData, index) => {
    return <Bar margin={h - barData.value} content={props.obj.categories[index]} key={index} height={barData.value} width={barWidth} color={barData.color} />
  })

  return (
    <div id="Boundary" className="flex-container" style={styleBoundary}>
      {barsList}
    </div>
  )
}

export default CreateColumnChart;