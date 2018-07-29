import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-16-bootstrap-date-picker';
import { ControlLabel, Button } from 'react-bootstrap';
import * as actions from 'actions';
import FieldGroup from 'components/itemizer/FieldGroup'
import './userInputForm.css';

class UserInputForm extends Component {
  constructor(props) {
    super(props)

    let value = new Date().toISOString();
    this.state = {
      name: '',
      department: '',
      position: '',
      manager: '',
      email: '',
      startDate: value,
      endDate: '',
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

  handleStartDateChange = event => {
    this.setState({ startDate: event });
  };

  handleEndDateChange = event => {
    this.setState({ endDate: event });
  };

  handleLApprovedByChange = event => {
    this.setState({ approvedBy: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let userInfo = {
      name: this.state.name,
      department: this.state.department,
      position: this.state.position,
      manager: this.state.manager,
      email: this.state.email,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      approvedBy: this.state.approvedBy,
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
      startDate,
      endDate,
      approvedBy,
    } = this.props.userInfo

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handleNameChange}
            value={name ? name : this.state.name}
            label="Name"
            placeholder="Full name"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handleDepartmentChange}
            value={department ? department : this.state.department}
            label="Department"
            placeholder="i.e. Engineering"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handlePositionChange}
            value={position ? position : this.state.position}
            label="Text"
            placeholder="Job Title"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handleManagerChange}
            value={manager ? manager : this.state.manager}
            label="Superviser"
            placeholder="Direct Supervisor"
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            onChange={this.handleEmailChange}
            value={email ? email : this.state.email}
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handleLApprovedByChange}
            value={approvedBy ? approvedBy : this.state.approvedBy}
            label="Approved By"
            placeholder="Approved By"
          />
          <div className="field-dates">
            <ControlLabel>Start Date</ControlLabel>
            <DatePicker
              id="example-datepicker"
              value={startDate ? startDate : this.state.startDate}
              onChange={this.handleStartDateChange}
            />
          </div>
          <div className="field-dates">
            <ControlLabel>End Date</ControlLabel>
            <DatePicker
              id="example-datepicker"
              value={endDate ? endDate : this.state.endDate}
              onChange={this.handleEndDateChange}
            />
          </div>
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
