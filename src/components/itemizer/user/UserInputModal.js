import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import UserInputForm from 'components/itemizer/user/UserInputForm';

class UserInputModal extends Component {

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Employee Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserInputForm onHide={this.props.onHide}/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UserInputModal;
