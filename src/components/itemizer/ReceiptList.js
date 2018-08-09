import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReceiptCard from 'components/itemizer/ReceiptCard';

class ReceiptList extends Component {
//TODO need to deal with the case when there are no receipts
  static propTypes = {
    uid: PropTypes.string,
    companyName: PropTypes.string,
    price: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props)

    this.state = {
      receiptList: [],
    };
  }

  componentDidMount() {
    this.setState({receiptList: this.props.receipts})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.receipts !== this.state.receiptList) {
      this.setState({receiptList: nextProps.receipts})
    }
  }

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

  deleteReceipt = (event) => {
    this.props.deleteReceipt(event.target.id)
  }

  renderReceiptRow = () => {
    let renderedReceiptList = []

    this.state.receiptList.forEach((receipt) => {
      const {
        uid,
        companyName,
        price,
        date,
        description,
        category,
      } = receipt

      renderedReceiptList.push(
        <ReceiptCard
          uid={uid}
          key={uid}
          companyName={companyName}
          price={price}
          date={date}
          description={description}
          category={category}
          deleteReceipt={this.deleteReceipt}
        />
      )
    })
    return renderedReceiptList
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

export default connect(mapStateToProps, actions)(ReceiptList);
