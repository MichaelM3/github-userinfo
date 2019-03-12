import React, { Component } from 'react';
import UserForm from './UserForm'
import UserInfo from './UserInfo'

class App extends Component {

  state = {
    formUsernameInput: "",
    user: null
  }

  componentDidMount() {
    console.log("Component did mount")
  }

  // Controlled form for handling user's inputs in the
  // form field and change the state
  handleUsernameInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Handles the Get request when a user submits a username
  // If the response has a message object it's going to say
  // no user found therefore the logic in the promise will catch it
  // If the user exists the promise will change the user state to the
  // submitted username
  handleUserSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.github.com/users/${this.state.formUsernameInput}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.message) {
        alert("Username does not exist!")
      } else {
        this.setState({ user: response })
      }
    })
  }

  render() {
    return (
      <div>
        <h1>GitHub UserInfo</h1>
        <UserForm
          handleUserSubmit={this.handleUserSubmit}
          handleUsernameInput={this.handleUsernameInput}
        />
        <UserInfo
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
