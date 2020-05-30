import React from "react";
import Modal from 'react-modal';
import styles from '../styles/commonStyles.module.css';
import messageStyles from '../styles/sendMessage.module.css';
import hostStyles from '../styles/host.module.css';


const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '12px'
  }
};
Modal.setAppElement('#host');



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
      <button className={messageStyles.sendMessage} onClick={openModal} >Contact host</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={messageStyles.main}>
          <div className={hostStyles.name}>Contact {props.name}</div>
          <div>{props.name} typically responds {props.responseTime}</div>
          <form>
            <textarea className={messageStyles.textArea} type='text' placeholder="Your message here" rows="4" cols="50" spellCheck="true"></textarea>
            <input className={messageStyles.message} type='submit' value='Send message' />
          </form>
        </div>
      </Modal>
    </div>
  )

}


export default SendMessage;