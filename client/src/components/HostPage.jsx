import React from "react";
import Description from './Description.jsx';
import Profile from './Profile.jsx';
var moment = require('moment');



import {
  Info, Avatar, Date
} from './styledComponents.jsx'
import {
  IconProfile, ImageProfile, StatsData, MainStyles, Name, Info1, Quote
} from './HostPageStyles.jsx'




const HostPage = (props) => (

  <MainStyles className='flex-container host-details'>
  <Info1>
    <Avatar className='avatar'>
      <ImageProfile className='photo' src={props.host.avatarUrl} />

      {props.host.superhost &&
      <IconProfile className='icon' src='http://localhost:3001/assets/icon.png' />
      }
    </Avatar>

    <StatsData className='reviews'><img className="star" src='http://localhost:3001/assets/profile-reviews.png' /> {props.host.reviews} Reviews </StatsData>
    {props.host.verified && <StatsData className='verified'><img className="check" src='http://localhost:3001/assets/profile-ver.png' /> Verified </StatsData>}
    {props.host.superhost &&
      <StatsData className='superhost-stats-copy'><img className='superhost-stats' src='http://localhost:3001/assets/icon-super-profile.png' /> Superhost </StatsData>
      }

  </Info1>
  <Info className='desc-host-details'>
    <Name className='host-name' >Hi, I'm {props.host.name}</Name>
    <Date className='date-joined' >Joined in {moment(props.host.date).format("MMMM YYYY")}</Date>
    <Quote>"</Quote>
    <Description className='desc' less={props.host.descShort} more={props.host.description}/>
    <div className='lang'><img src='https://host-service.s3-us-west-1.amazonaws.com/lang-icon.PNG'/>   Speaks {props.host.languages}</div>
    <div className='location'><img src='https://host-service.s3-us-west-1.amazonaws.com/loc--icon.png'/>   Lives in {props.host.location}</div>
  </Info>

    </MainStyles>


)



export default HostPage;