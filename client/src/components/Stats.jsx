import React, { useState } from "react";

import {
  Cols, StatsData
} from './styledComponents.jsx';


const Stats = (props) => (
  <Cols>
    <StatsData className='reviews'><img className="star" src='http://localhost:3001/assets/star.png' /> {props.reviews} Reviews </StatsData>
    {props.verified && <StatsData className='verified'><img className="check" src='http://localhost:3001/assets/verified.png' />Verified </StatsData>}
    {props.superhost &&
      <StatsData className='superhost-stats-copy'><img className='superhost-stats' src='http://localhost:3001/assets/statsHostIcon.png' /> Superhost </StatsData>
      }
  </Cols>
)

export default Stats;