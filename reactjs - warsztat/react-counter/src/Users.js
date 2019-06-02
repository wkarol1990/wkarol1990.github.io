import React, {Component} from 'react';

import UserList from './UsersList';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      users: []
    }
  };
   

  addNewUser = () => {
    let user = {
      name: this.state.userName,
      id: Date.now()
    }

    this.setState(prevState => {
      return({
        users: prevState.users.concat(user),
        userName: ''
      })
    });
  } 

  removeUser = (id, name) => {
    let users = this.state.users;
    users = users.filter(currentUser => {
      if (currentUser.id !== id) return currentUser;
    });

    this.setState({users});

    /* 2 sposób: this.setState({users}); */
    // this.setState(prevState => {
    //   return ({users});
    // })
  }

  onInputChange = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div className="counter">
        <h1 className="header">User's List</h1>
        <br/>
        <input 
          type="text"
          className="input" 
          value={this.state.userName}
          onChange={this.onInputChange}
        />
        <button 
          onClick={this.addNewUser} 
          className="button">Add User
        </button>
        <UserList 
          users={this.state.users} 
          removeUser={this.removeUser} 
        />
          
      </div>
    );
  }
}
  
  export default Users;