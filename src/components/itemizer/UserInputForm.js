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
    //really need to clean up this state...
    this.state = {
      name: '',
      department: '',
      position: '',
      manager: '',
      email: '',
      approvedBy: '',
      validManager: null,
      validName: null,
      validDepartment: null,
      validPosition: null,
      validEmail: null,
      validApproved: null,
      validForm: false,
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.userInfo.name,
      department: this.props.userInfo.department,
      position: this.props.userInfo.position,
      manager: this.props.userInfo.manager,
      email: this.props.userInfo.email,
      approvedBy: this.props.userInfo.approvedBy,
      validManager: this.props.userInfo.validManager,
      validName: this.props.userInfo.validName,
      validDepartment: this.props.userInfo.validDepartment,
      validPosition: this.props.userInfo.validPosition,
      validEmail: this.props.userInfo.validEmail,
      validApproved: this.props.userInfo.validApproved,
      validForm: this.props.userInfo.validForm,
    })
  }

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase());

    return isValid ? "success" : "error";
  }

  hasString = (string) => {
    return string === '' ? "error" : "success";
  }

  handleNameChange = ({target: {value}}) => {
    this.setState({
      name: value,
      validName: this.hasString(value),
    })
  };

  handleDepartmentChange = ({target: {value}}) => {
    this.setState({
      department: value,
      validDepartment: this.hasString(value)
    });
  };

  handlePositionChange = ({target: {value}}) => {
    this.setState({
      position: value,
      validPosition: this.hasString(value)
    });
  };

  handleManagerChange = ({target: {value}}) => {
    this.setState({
      manager: value,
      validManager: this.hasString(value)
    });
  };

  handleEmailChange = ({target: {value}}) => {
    this.setState({
      email: value,
      validEmail: this.validateEmail(value)
    })
  }

  handleLApprovedByChange = ({target: {value}}) => {
    this.setState({
      approvedBy: value,
      validApproved: this.hasString(value)
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //TODO: do not allow submission unless form is valid
    //const { allFieldsValid } = this.state;
    //const validForm = Object.keys(allFieldsValid).every((k) => allFieldsValid[k] === "success")

    // if(!validForm) {
      //TODO: give user feedback
    //   return;
    // }

    //TODO: clean this object up...
    let userInfo = {
      name: this.state.name,
      department: this.state.department,
      position: this.state.position,
      manager: this.state.manager,
      email: this.state.email,
      approvedBy: this.state.approvedBy,
      validName: this.state.validName,
      validManager: this.state.validManager,
      validDepartment: this.state.validDepartment,
      validPosition: this.state.validPosition,
      validEmail: this.state.validEmail,
      validApproved: this.state.validApproved,
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
