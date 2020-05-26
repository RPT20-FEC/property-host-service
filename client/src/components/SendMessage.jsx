import React from "react";

import {
  MessageStyle, Date, ContactTextarea, Message, ContactHost
} from './styledComponents.jsx'
import {
   Name
} from './HostPageStyles.jsx'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//Modal.setAppElement('#host');



const SendMessage = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div>
      <ContactHost className='contact-button' onClick={openModal} >Contact host</ContactHost>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <MessageStyle>
          <Name>Contact {props.name}</Name>
          <div>{props.name} typically responds {props.responseTime}</div>
          <form>
            <ContactTextarea type='text' placeholder="Your message here" rows="2" spellcheck="true"></ContactTextarea>
            <Message type='submit' value='Send message' />
          </form>
        </MessageStyle>
      </Modal>
    </div>
  )

}


export default SendMessage;