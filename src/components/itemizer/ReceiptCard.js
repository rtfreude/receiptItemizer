import React, { Component } from 'react';
import './receiptCard.css';

class ReceiptList extends Component {

  render() {
    const {
      companyName,
      price,
      date
    } = this.props;
    return (
      <div className="card-container">
        {companyName}
        {price}
        {date}
      </div>
    );
  }
}

export default ReceiptList;
