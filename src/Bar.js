import React from 'react';

const Bar = (props) => {
  const styleBar = {
    "height": props.height + "px",
    "width": props.width + "px",
    "marginTop": props.margin + "px",
    "background": props.color
  }

  return (
    <div className="Bars" style={styleBar}>
      {props.content}
      <br></br>
      {props.height}
    </div>
  )
}

export default Bar;