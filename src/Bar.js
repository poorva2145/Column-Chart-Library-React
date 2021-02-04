import React from 'react';

const Bar = ({ height, width, margin, color, content }) => {
  const styleBar = {
    "height": height + "px",
    "width": width + "px",
    "marginTop": margin + "px",
    "background": color
  }

  return (
    <div className="bars" style={styleBar}>
      {content}
      <br></br>
      {height}
    </div>
  )
}

export default Bar;