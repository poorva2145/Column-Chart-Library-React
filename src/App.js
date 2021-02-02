import React from 'react';
import { render } from 'react-dom';
import CreateColumnChart from './CreateColumnChart';

const App = () => {
  const obj = {
    x_axis_label: 400,
    y_axis_label: 300,
    categories: ['Python', 'C++', 'Ruby', 'Java'],
    data: [{ value: 180, color: '#11698e' }, { value: 220, color: '#312c51' }, { value: 100, color: '#184d47' }, { value: 140, color: '#a20a0a' }],
    color: '#008080'
  };

  return (
    <CreateColumnChart obj={obj} />
  )
}


render(<App />, document.getElementById("root"));