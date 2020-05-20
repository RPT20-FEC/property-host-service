import React, { useState } from "react";

import {
  Cols, StatsData
} from './styledComponents.jsx';


const Stats = (props) => (
  <Cols>
    <StatsData className='reviews'>
      <img className="star" src='https://host-service.s3-us-west-1.amazonaws.com/star.png' />
      {props.reviews} Reviews </StatsData>
    {props.verified &&
    <StatsData className='verified'>
      <img className="check" src='https://host-service.s3-us-west-1.amazonaws.com/verified.png' />Verified </StatsData>
      }
    {props.superhost &&
      <StatsData className='superhost-stats-copy'>
        <img className='superhost-stats' src='https://host-service.s3-us-west-1.amazonaws.com/statsHostIcon.png' /> Superhost </StatsData>
      }
  </Cols>
)

export default Stats;