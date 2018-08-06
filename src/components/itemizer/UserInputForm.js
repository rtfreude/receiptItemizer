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
      allFieldsValid: {
        validManager: null,
        validName: null,
        validDepartment: null,
        validPosition: null,
        validEmail: null,
        validApproved: null,
      },
      validForm: false,
    };
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleNameChange = ({target: {value}}) => {
    const valid = !value ? "error" : "success";

    this.setState({
      name: value,
      allFieldsValid: { ...this.state.allFieldsValid, validName: valid }
    })
  };

  handleDepartmentChange = ({target: {value}}) => {
    const valid = !value ? "error" : "success";

    this.setState({
      department: value,
      allFieldsValid: { ...this.state.allFieldsValid, validDepartment: valid }
    });
  };

  handlePositionChange = ({target: {value}}) => {
    const valid = !value ? "error" : "success";

    this.setState({
      position: value,
      allFieldsValid: { ...this.state.allFieldsValid, validPosition: valid }
    });
  };

  handleManagerChange = ({target: {value}}) => {
    const valid = !value ? "error" : "success";

    this.setState({
      manager: value,
      allFieldsValid: { ...this.state.allFieldsValid, validManager: valid}
    });
  };

  handleEmailChange = ({target: {value}}) => {

    this.validateEmail(value) ?
    this.setState({
      email: value,
      allFieldsValid: { ...this.state.allFieldsValid, validEmail: "success" }
    }) :
    this.setState({
      email: value,
      allFieldsValid: { ...this.state.allFieldsValid, validEmail: "error" }
    })
  };

  handleLApprovedByChange = ({target: {value}}) => {
    const valid = !value ? "error" : "success";

    this.setState({
      approvedBy: value,
      allFieldsValid: { ...this.state.allFieldsValid, validApproved: valid }
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
    } = this.props.userInfo;

    const { allFieldsValid } = this.state;
    const validForm = Object.keys(allFieldsValid).every((k) => allFieldsValid[k] === "success")

    if(!validForm) {
      //TODO: give user feedback
      return;
    }
    //TODO: this needs to be fixed up...wonky logic
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
            validationstate={name ? "success" : this.state.allFieldsValid.validName}
            type="text"
            defaultValue={name}
            onChange={this.handleNameChange}
            label="Name"
            placeholder="Full name"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={department ? "success" : this.state.allFieldsValid.validDepartment}
            defaultValue={department}
            onChange={this.handleDepartmentChange}
            label="Department"
            placeholder="i.e. Engineering"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={position ? "success" : this.state.allFieldsValid.validPosition}
            defaultValue={position}
            onChange={this.handlePositionChange}
            label="Text"
            placeholder="Job Title"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={manager ? "success" : this.state.allFieldsValid.validManager}
            defaultValue={manager}
            onChange={this.handleManagerChange}
            label="Superviser"
            placeholder="Direct Supervisor"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={email ? "success" : this.state.allFieldsValid.validEmail}
            onChange={this.handleEmailChange}
            defaultValue={email}
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formValidationSuccess2"
            validationstate={approvedBy ? "success" : this.state.allFieldsValid.validApproved}
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
