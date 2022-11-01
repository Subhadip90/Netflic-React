import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Cards';
import "./index.css";
import Sdata from './Components/Sdata';

ReactDOM.render(
  <>
    <h1 className='heading-style'>List of my top Netflix Web Series in 2022</h1>
    {Sdata.map((val, index) => {
      console.log(index);
      return (
        <Card imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      )
    })};

  </>, document.getElementById("root"));
