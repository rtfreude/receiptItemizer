import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import * as actions from 'actions';
import HeaderItems from 'components/itemizer/HeaderItems';
import UserInputModal from './UserInputModal';
import ReceiptInputModal from './ReceiptInputModal';
import ReceiptControls from 'components/itemizer/ReceiptControls';
import './header.css';

class Header extends Component {
  static propTypes = {
    userInfo:  PropTypes.shape({
      name: PropTypes.string,
      department: PropTypes.string,
      position: PropTypes.string,
      manager: PropTypes.string,
      email: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      approvedBy: PropTypes.string,
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      showUserModal: false,
      showReceiptModal: false,
    }
  }

  renderRowOneHeaderItems = (headerFieldsOne) => {
    let headerEl = [];
    headerFieldsOne.forEach((field, i) => {
      headerEl.push(
        <HeaderItems key={i} classItem={"user-info-item"} field={field}/>
      )
    })
    return headerEl;
  }

  renderRowTwoHeaderItems = (headerFieldsTwo) => {
    let headerEl = [];
    headerFieldsTwo.forEach((field, i) => {
      headerEl.push(
        <HeaderItems key={i} classItem={"user-info-item"} field={field}/>
      )
    })
    return headerEl;
  }

  editUserInfo = () => {
    this.setState({ showUserModal: true })
  }

  addReceipt = () => {
    this.setState({ showReceiptModal: true })
  }

  comparePrice = (a,b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  }

  sortPriceAsc = () => {
    const priceSortAsc = this.props.receipts.sort(this.comparePrice);

    this.props.priceAsc(priceSortAsc);
  }

  sortPriceDesc = () => {
    console.log('test')
  }

  sortCatAsc = () => {
    console.log('test')
  }

  sortCatDesc = () => {
    console.log('test')
  }

  render() {
    const {
      name,
      department,
      position,
      manager,
      email,
      approvedBy,
    } = this.props.userInfo

    const startDateFormatted = moment().startOf('week').add(1, 'days').format("MMMM Do YYYY");
    const endDateFormatted = moment().endOf('week').add(1, 'days').format("MMMM Do YYYY")
    //TODO: Build a component to deal with populating header columns/fields
    const headerFieldsOne = [
      ['Name:', name],
      ['Department:', department],
      ['Position:', position],
      ['Manager:', manager],
    ]

    const headerFieldsTwo = [
      ['E-mail:', email],
      ['Start Date:', startDateFormatted],
      ['End Date:', endDateFormatted],
      ['Approved By:', approvedBy],
    ]

    let closeUserModal = () => this.setState({ showUserModal: false });
    let closeReceiptModal = () => this.setState({ showReceiptModal: false });

    return (
      <div className="header-container">
        <div className="title-container">
          <Grid className="grid-container">
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <span className="largest-text report-name-container">
                  RECEIPT ITEMIZER
                </span>
              </Col>
              <Col xs={12} md={4}>
                <div className="name-address-container">
                  <span className="large-text">
                    COMPANY NAME
                  </span>
                  <span className="medium-text">
                    1234 My company address
                  </span>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <Button
                  className="user-button"
                  bsStyle="primary"
                  onClick={this.editUserInfo}>
                    Edit User Info
                </Button>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="user-info-container">
          <Grid className="grid-container">
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="user-info-columns">
                  {this.renderRowOneHeaderItems(headerFieldsOne)}
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="user-info-columns">
                  {this.renderRowTwoHeaderItems(headerFieldsTwo)}
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <ReceiptControls
          className="receipt-button"
          addReceipt={this.addReceipt}
          sortPriceAsc={this.sortPriceAsc}
          sortPriceDesc={this.sortPriceDesc}
          sortCatAsc={this.sortCatAsc}
          sortCatDesc={this.sortCatDesc}
        />
        <UserInputModal show={this.state.showUserModal} onHide={closeUserModal}/>
        <ReceiptInputModal show={this.state.showReceiptModal} onHide={closeReceiptModal}/>
      </div>
    );
  }
}
//TODO move state to container when everything is hooked up
function mapStateToProps (state){
  return {
    userInfo: state.userInfo,
    receipts: state.receipts
  }
}

export default connect(mapStateToProps, actions)(Header);
