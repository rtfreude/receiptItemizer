import React, { Component } from 'react';
import Header from 'components/itemizer/Header';
import ReceiptList from 'components/itemizer/ReceiptList';
import UserInputForm from 'components/itemizer/UserInputForm';

class ReceiptItemizer extends Component {

  render() {
    return (
      <div>
        <Header />
        <ReceiptList />
        <UserInputForm />
      </div>
    );
  }
}

export default ReceiptItemizer;
