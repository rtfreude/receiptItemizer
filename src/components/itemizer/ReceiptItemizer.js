import React, { Component } from 'react';
import Header from 'components/itemizer/Header';
import ReceiptList from 'components/itemizer/ReceiptList';

class ReceiptItemizer extends Component {

  render() {
    return (
      <div>
        <Header />
        <ReceiptList className="receipt-list-container"/>
      </div>
    );
  }
}

export default ReceiptItemizer;
