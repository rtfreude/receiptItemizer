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
      department: '',
      position: '',
      manager: '',
      email: '',
      approvedBy: '',
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleDepartmentChange = event => {
    this.setState({ department: event.target.value });
  };

  handlePositionChange = event => {
    this.setState({ position: event.target.value });
  };

  handleManagerChange = event => {
    this.setState({ manager: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleLApprovedByChange = event => {
    this.setState({ approvedBy: event.target.value });
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
            id="formControlsText"
            type="text"
            defaultValue={name}
            onChange={this.handleNameChange}
            //value={this.state.name}
            label="Name"
            placeholder="Full name"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            defaultValue={department}
            onChange={this.handleDepartmentChange}
            label="Department"
            placeholder="i.e. Engineering"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            defaultValue={position}
            onChange={this.handlePositionChange}
            label="Text"
            placeholder="Job Title"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            defaultValue={manager}
            onChange={this.handleManagerChange}
            label="Superviser"
            placeholder="Direct Supervisor"
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            onChange={this.handleEmailChange}
            defaultValue={email}
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
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
