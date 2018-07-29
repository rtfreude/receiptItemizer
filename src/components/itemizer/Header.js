import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import HeaderItems from 'components/itemizer/HeaderItems'
import UserInputModal from './UserInputModal'
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
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
    this.setState({ showModal: true })
  }


  render() {
    const {
      name,
      department,
      position,
      manager,
      email,
      startDate,
      endDate,
      approvedBy,
    } = this.props.userInfo

    const startDateFormatted = moment(startDate).format("MMMM Do YYYY");
    const endDateFormatted = moment(endDate).format("MMMM Do YYYY");
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

    let closeModal = () => this.setState({ showModal: false });

    return (
      <div className="header-container">
        <div className="title-container">
          <span className="largest-text report-name-container">
            RECEIPT ITEMIZER
          </span>
          <div className="name-address-container">
            <span className="large-text">
              COMPANY NAME
            </span>
            <span className="medium-text">
              1234 My company address
            </span>
          </div>
          <Button
            className="user-button"
            bsStyle="primary"
            onClick={this.editUserInfo}>
              Edit User Info
          </Button>
        </div>
        <div className="user-info-container">
          <div className="user-info-columns">
            {this.renderRowOneHeaderItems(headerFieldsOne)}
          </div>
          <div className="user-info-columns">
            {this.renderRowTwoHeaderItems(headerFieldsTwo)}
          </div>
          <Button
            className="receipt-button"
            bsStyle="success"
            onClick={this.editUserInfo}>
              Add Reciept
          </Button>
        </div>

        <UserInputModal show={this.state.showModal} onHide={closeModal}/>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    userInfo: state.userInfo,
  }
}

export default connect(mapStateToProps)(Header);
