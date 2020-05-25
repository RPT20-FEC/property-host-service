import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useParams} from "react-router";
import Profile from './Profile.jsx';
var moment = require('moment');

import {
  Info, Avatar, Date
} from './styledComponents.jsx';
import {
  IconProfile, ImageProfile, StatsData, MainStyles, Name, Info1, Quote
} from './HostPageStyles.jsx';

const HostPage = (props) => {

  const [host, setHost] = useState(0);
  let { id } = useParams();

  useEffect(() => {

    console.log('here is host id from params, ', id)
    $.ajax({
      url: 'http://54.215.154.186/hosts/' + id,
      type: 'GET',
      success: (data) => {
        setHost(data[0]);
      },
      error: function(err) {
      }
    })

  }, []);

  return (

  <MainStyles className='flex-container host-details'>
    <Info1>
      <Avatar className='avatar'>
        <ImageProfile className='photo' src={host.avatarUrl} />

        {host.superhost &&
          <IconProfile className='icon' src='https://host-service.s3-us-west-1.amazonaws.com/icon.png' />
        }
      </Avatar>

      <StatsData className='reviews'>
        <img className="star" src='https://host-service.s3-us-west-1.amazonaws.com/profile-reviews.png' /> {host.reviews} Reviews
      </StatsData>
      {host.verified &&
        <StatsData className='verified'>
          <img className="check" src='https://host-service.s3-us-west-1.amazonaws.com/profile-ver.PNG' /> Verified
        </StatsData>
      }
      {host.superhost &&
        <StatsData className='superhost-stats-copy'>
          <img className='superhost-stats' src='https://host-service.s3-us-west-1.amazonaws.com/icon-super-profile.png' /> Superhost
        </StatsData>
      }

    </Info1>
    <Info className='desc-host-details'>
      <Name className='host-name' >Hi, I'm {host.name}</Name>
      <Date className='date-joined' >Joined in {moment(host.joined_at).format("MMMM YYYY")}</Date>
      <Quote>"</Quote>
      <div className='desc'>{host.description} </div>
      <div className='lang'><img src='https://host-service.s3-us-west-1.amazonaws.com/lang-icon.PNG'/>   Speaks {host.languages}</div>
      <div className='location'><img src='https://host-service.s3-us-west-1.amazonaws.com/loc--icon.png'/>   Lives in {host.location}</div>
    </Info>
  </MainStyles>
  )
}

export default HostPage;