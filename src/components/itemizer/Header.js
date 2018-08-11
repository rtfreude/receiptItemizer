import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import * as actions from 'actions';
import HeaderItems from 'components/itemizer/HeaderItems';
import UserInputModal from './UserInputModal';
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
        <UserInputModal show={this.state.showUserModal} onHide={closeUserModal}/>
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
