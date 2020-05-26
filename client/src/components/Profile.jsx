import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HostPage from './HostPage.jsx';
import App from './App.jsx';
var moment = require('moment');


import {
  Avatar, Image, Icon, Title, Date, Name, Top
} from './styledComponents.jsx';


const Profile = (props) => (
  <div>
    <Top>
      <Avatar>
        <Link to={`${props.propertyId}/host-details/${props.host.id}`} target="_blank" href='http://54.215.154.186' >
          <Image className='photo' src={props.host.avatarUrl} />
          {props.host.superhost &&
          <Icon className='icon' src='https://host-service.s3-us-west-1.amazonaws.com/icon.png' />
          }
        </Link>
      </Avatar>
      <Title>
        <Name className='host-name' >Hosted by {props.host.name}</Name>
        <Date className='date-joined' >Joined in {moment(props.host.joined_at).format("MMMM YYYY")}</Date>
      </Title>
    </Top>
  </div>
)

export default Profile;