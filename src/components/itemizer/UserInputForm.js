import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import * as actions from 'actions';
import FieldGroup from 'components/itemizer/FieldGroup'
import './userInputForm.css';

class UserInputForm extends Component {
  static propTypes = {
    addReceipt: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      validName: null,
      department: '',
      validDepartment: null,
      position: '',
      validPosition: null,
      manager: '',
      validManager: null,
      email: '',
      validEmail: null,
      approvedBy: '',
      validApproved: null,
    };
  }

  handleNameChange = ({target: {value}}) => {
    this.setState({
      name: value,
      validName: "success"
    });
  };

  handleDepartmentChange = ({target: {value}}) => {
    this.setState({
      department: value,
      validDepartment: "success"
    });
  };

  handlePositionChange = ({target: {value}}) => {
    this.setState({
      position: value,
      validPosition: "success"
    });
  };

  handleManagerChange = ({target: {value}}) => {
    this.setState({
      manager: value,
      validManager: "success"
    });
  };

  handleEmailChange = ({target: {value}}) => {
    this.setState({
      email: value,
      validEmail: "success"
    });
  };

  handleLApprovedByChange = ({target: {value}}) => {
    this.setState({
      approvedBy: value,
      validApproved: "success"
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      name,
      department,
      position,
      manager,
      email,
      approvedBy,
    } = this.props.userInfo

    let userInfo = {
      name: this.state.name || name,
      department: this.state.department || department,
      position: this.state.position || position,
      manager: this.state.manager || manager,
      email: this.state.email || email,
      approvedBy: this.state.approvedBy || approvedBy,
    }

    this.props.saveUserInfo(userInfo);
    this.props.onHide();
  };

  render() {
    const {
      name,
      department,
      position,
      manager,
      email,
      approvedBy,
    } = this.props.userInfo

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={this.state.validName}
            type="text"
            defaultValue={name}
            onChange={this.handleNameChange}
            label="Name"
            placeholder="Full name"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={this.state.validDepartment}
            defaultValue={department}
            onChange={this.handleDepartmentChange}
            label="Department"
            placeholder="i.e. Engineering"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={this.state.validPosition}
            defaultValue={position}
            onChange={this.handlePositionChange}
            label="Text"
            placeholder="Job Title"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={this.state.validManager}
            defaultValue={manager}
            onChange={this.handleManagerChange}
            label="Superviser"
            placeholder="Direct Supervisor"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={this.state.validEmail}
            onChange={this.handleEmailChange}
            defaultValue={email}
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={this.state.validApproved}
            onChange={this.handleLApprovedByChange}
            defaultValue={approvedBy}
            label="Approved By"
            placeholder="Approved By"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    userInfo: state.userInfo,
  }
}
//temporarliy connect the component to wire everything up...will be moved to it's container
export default connect(mapStateToProps, actions)(UserInputForm);
