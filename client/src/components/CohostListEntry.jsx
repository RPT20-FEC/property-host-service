import React from "react";
import {
  Link
} from "react-router-dom";

import {
  Info, Avatar, ImageSmall, IconSmall
} from './styledComponents.jsx';




const CohostListEntry = (props) => (
  <Info>
    <div className='flex-container'>
      <Avatar>
        <Link to={`${props.propertyId}/host-details/${props.host.id}`}>
          <ImageSmall className='photo' src={props.host.avatarUrl} />
          {props.host.superhost &&
            <IconSmall className='icon' src='https://host-service.s3-us-west-1.amazonaws.com/icon.png' />
          }
        </Link>
      </Avatar>
      <div className='cohostAv'>{props.host.name}</div>
    </div>
  </Info>
)

export default CohostListEntry;