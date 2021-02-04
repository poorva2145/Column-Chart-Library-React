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

  let col = props.obj.color;

  let barsList = (props.obj.data).map((barData, index) => {
    if (barData.color === undefined) {
      col = props.obj.color;
    }
    else {
      col = barData.color;
    }
    return <Bar margin={h - barData.value} content={props.obj.categories[index]} key={index} height={barData.value} width={barWidth} color={col} />
  })

  return (
    <div id="Boundary" className="flex-container" style={styleBoundary}>
      {barsList}
    </div>
  )
}

export default CreateColumnChart;