import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReceiptInputModal from 'components/itemizer/ReceiptInputModal'
import ReceiptCard from 'components/itemizer/ReceiptCard';
import ReceiptControls from 'components/itemizer/ReceiptControls';
import './receiptList.css'

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
      editModal: false,
      showReceiptModal: false,
      receiptList: [],
      editreceipt: {},
    }
  }

  componentDidMount() {
    this.setState({receiptList: this.props.receipts})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.receipts !== this.state.receiptList) {
      this.setState({receiptList: nextProps.receipts})
    }
    if (nextProps.modalEditing !== this.state.editModal) {
      this.setState({editModal: nextProps.modalEditing})
    }
  }

  addReceipt = () => {
    this.setState({ showReceiptModal: true })
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

  comparePriceAsc = (a,b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  }

  comparePriceDesc = (a,b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }

  sortPriceAsc = () => {
    const priceSortAsc = this.props.receipts.sort(this.comparePriceAsc);

    this.props.sortPrice(priceSortAsc);
  }

  sortPriceDesc = () => {
    const priceSortDesc = this.props.receipts.sort(this.comparePriceDesc);

    this.props.sortPrice(priceSortDesc);
  }

  sortCatAsc = () => {
    console.log('test')
  }

  sortCatDesc = () => {
    console.log('test')
  }

  //TODO:This is wired up but currently adds receipts rather then edit, just needs to be finished off.
  // editReceipt = (event) => {
  //
  //   console.log('to edit receipt')
  //   //console.log(this.props.updateReceipt(event.target.id))
  //   this.setState({ showReceiptModal: false })
  // }

  getReceipt = (event) => {
    this.props.receipts.forEach((receipt) => {
      if(receipt.uid === event.target.id) {
        this.setState({
          editModal: true,
          showReceiptModal: true,
          editreceipt: receipt,
        })
      }
    })
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
          getReceipt={this.getReceipt}
        />
      )
    })
    return renderedReceiptList
  }

  render() {
    const closeReceiptModal = () => this.setState({ showReceiptModal: false });
    const editing = this.state.editModal ? 'true' : 'false';

    return (
      <div>
        <ReceiptControls
          className="receipt-button"
          addReceipt={this.addReceipt}
          sortPriceAsc={this.sortPriceAsc}
          sortPriceDesc={this.sortPriceDesc}
          sortCatAsc={this.sortCatAsc}
          sortCatDesc={this.sortCatDesc}
        />
        <div className="receipt-holder">
          <div>
            {/* {this.renderReceiptHeader()} */}
          </div>
          <div>
            {this.state.receiptList.length > 0 ? this.renderReceiptRow() : <span>Please click the 'Add Receipt' button to get started.</span>}
            <ReceiptInputModal
              editing={editing}
              onHide={closeReceiptModal}
              show={this.state.showReceiptModal}
              getreceipt={this.getreceipt}
              editreceipt={this.state.editreceipt}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    receipts: state.receipts,
    modalEditing: state.modalEditing,
  }
}

export default connect(mapStateToProps, actions)(ReceiptList);
