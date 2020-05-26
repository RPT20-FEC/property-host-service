import React, { useState } from "react";
import Description from './Description.jsx';
import Profile from './Profile.jsx';
import Stats from './Stats.jsx';
import CohostList from './CohostList.jsx';
import {
  Link
} from "react-router-dom";


import {
  Bold, Info, ContactHost, Note, NoteIcon, Cols
} from './styledComponents.jsx';


const Host = (props) => (
  <div>
    <Profile host={props.host} propertyId={props.propertyId}/>

    <div className='flex-container'>
      <Info>
        <Stats superhost={props.host.superhost} reviews={props.host.reviews} verified={props.host.verified}/>

        <Description className='desc' less={props.host.descShort} more={props.host.description}/>
        {props.host.coHost.length>0 &&
          <CohostList id={props.host.id} propertyId={props.propertyId} />
        }
        {props.host.duringStay &&
        <div>
          <Bold className='during-stay-hdln' >During your stay</Bold>
          <Description classname='during-stay' less={props.host.duringStayLess} more={props.host.duringStay}/>
        </div>
        }
        {props.host.superhost &&
          <div className='superhost-true'>
          <Bold>{props.host.name} is a Superhost</Bold>
          <div className="superhost-desc">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
          </div>
        }
      </Info>
      <Info>
        <div className='lang'>Language: {props.host.languages}</div>
        <div className='resp-rate'>Response rate: {props.host.responseRate}%</div>
        <div className='resp-time'>Response time: {props.host.responseTime}</div>
        <Link to={`${props.propertyId}/send-message`} >
          <ContactHost className='contact-button'>Contact host</ContactHost>
        </Link>
        <Note>
          <NoteIcon className='payment-wrg-icon' src='https://host-service.s3-us-west-1.amazonaws.com/paymentNote.png' />
          <p className='payment-warning'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app. </p>
        </Note>
      </Info>
    </div>
  </div>
)

export default Host;