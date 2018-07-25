import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class UserInputForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    memo: '',
  };

  handleMemoChange = event => {
    this.setState({ memo: event.target.value });
  };

  handleFNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLNameChange = event => {
    this.setState({ lastName: event.target.value });
  };


  handleSubmit = event => {
    event.preventDefault();
    let userInfo = {
      firstName: this.state.firstName,
      lastNam: this.state.lastName,
      memo: this.state.memo,
    }
    this.props.saveUserInfo(userInfo);
    this.setState({ memo: '', firstName:'', lastName:'' });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>User Info</h4>
          <input onChange={this.handleFNameChange} value={this.state.firstName} />
          <input onChange={this.handleLNameChange} value={this.state.lastName} />
          <textarea onChange={this.handleMemoChange} value={this.state.memo} />
          <div>
            <button>Submit</button>
          </div>
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
