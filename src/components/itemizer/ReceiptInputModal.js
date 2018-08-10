import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import ReceiptInputForm from 'components/itemizer/ReceiptInputForm';

class ReceiptInputModal extends Component {

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Receipt Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReceiptInputForm
            editing={this.props.editing}
            show={this.props.show}
            onHide={this.props.onHide}
            editreceipt={this.props.editreceipt}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ReceiptInputModal;
