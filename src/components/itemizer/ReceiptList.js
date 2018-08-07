import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
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

  //Hard code this for now to set up UI
  renderSortBar = () => {

      return (
        <div className="head-container">
          <Grid className="grid-container">
            <Row className="show-grid">
              <Col xs={6} md={1}>
                <span>Column 1</span>
              </Col>
              <Col xs={6} md={3}>
                <span>Column 2</span>
              </Col>
            </Row>
          </Grid>
        </div>
      );

  }

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
        <div>
          {/* {this.renderReceiptHeader()} */}
        </div>
        <div>
          {this.renderReceiptRow()}
        </div>
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
