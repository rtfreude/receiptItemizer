import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReceiptCard from 'components/itemizer/ReceiptCard';


class ReceiptList extends Component {

  renderReceiptRow = () => {
    let receiptList = [];
    const {
      companyName,
      price,
      date,
    } = this.props.receipts;
      //this.props.receipts.map(el => console.log(el.price, el.date, el.companyName))
    this.props.receipts.forEach((receipt, i) => {
      const {
        companyName,
        price,
        date,
      } = receipt
      receiptList.push(
        <ReceiptCard
          key={i}
          companyName={companyName}
          price={price}
          date={date}
        />
      )
    })

    return receiptList
  }

  render() {
    return (
      <div>
        {this.renderReceiptRow()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    receipts: state.receipts,
  }
}

export default connect(mapStateToProps)(ReceiptList);
