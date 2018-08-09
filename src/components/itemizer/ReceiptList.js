import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReceiptInputModal from 'components/itemizer/ReceiptInputModal'
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
      showReceiptModal: false,
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

  //TODO:This is wired up but currently adds receipts rather then edit, just needs to be finished off.
  editReceipt = (event) => {
    this.setState({ showReceiptModal: true })
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
          editReceipt={this.editReceipt}
        />
      )
    })
    return renderedReceiptList
  }

  render() {
    let closeReceiptModal = () => this.setState({ showReceiptModal: false });
    return (
      <div>
        <div>
          {/* {this.renderReceiptHeader()} */}
        </div>
        <div>
          {this.renderReceiptRow()}
          <ReceiptInputModal show={this.state.showReceiptModal} onHide={closeReceiptModal}/>
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
