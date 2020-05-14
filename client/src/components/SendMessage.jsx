import React from "react";

import {
  MessageStyle, Date, ContactTextarea, Message
} from './styledComponents.jsx'
import {
   Name
} from './HostPageStyles.jsx'


const SendMessage = (props) => (

  <MessageStyle>

    <Name>Contact {props.host.name}</Name>
    <div>{props.host.name} typically responds {props.host.responseTime}</div>
    <form>
    <ContactTextarea type='text' placeholder="Your message here" rows="2" spellcheck="true"></ContactTextarea>
    <Message type='submit' value='Send message' />
      </form>

    </MessageStyle>


)



export default SendMessage;