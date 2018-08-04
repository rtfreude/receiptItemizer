import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReceiptCard from 'components/itemizer/ReceiptCard';

class ReceiptList extends Component {
//TODO need to deal with the case when there are no receipts
  static propTypes = {
    companyName: PropTypes.string,
    price: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
  };

  renderReceiptRow = () => {
    let receiptList = [];

    this.props.receipts.forEach((receipt, i) => {
      const {
        companyName,
        price,
        date,
        description,
        category,
      } = receipt

      receiptList.push(
        <ReceiptCard
          key={i}
          companyName={companyName}
          price={price}
          date={date}
          description={description}
          category={category}
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
