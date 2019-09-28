import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid/v4';

//components

import LandingPage from './components/LandingPage';
import CreateUserForm from './components/CreateUserForm';
import UpdateUser from './components/UpdateUser';

class App extends Component {
  state = {
    userList: [],
    selectedUser: {},
    updateUser: {},
    isDeleted: null

  }
  selectUser = user => {
    console.log(user)
    this.setState({ selectedUser: user })
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      this.setState({ userList: response.data })
    })
  }
  handleEditUser = user => {
    this.setState({ updateUser: user })
  }
  submitEditedUser = (e, user) => {
    e.preventDefault();
    console.log(user)
    this.setState({ selectedUser: '' })
    let editedUser = {
      id: user.id,
      name: user.name,
      phone: user.phone,
      username: user.username,
      address: {
        street: user.street,
        zipcode: user.zipcode,
        city: user.city
      }
    }
    let users = this.state.userList;
    for (let i in users) {
      if (users[i].id === editedUser.id) {
        users[i] = editedUser;
        break;
      }
    }
    this.setState({ updateUser: editedUser })
    this.setState({ userList: users })
  }
  handleSubmit = (e, user) => {
    e.preventDefault();
    console.log('ovo prima', user)
    const newUser = {
      id: uuid(),
      name: user.name,
      email: user.email,
      username: user.username,
      address: {
        street: user.street,
        zipcode: user.zipcode,
        city: user.city
      },
      phone: user.phone

    }
    this.setState({ userList: [...this.state.userList, newUser] })
  }
  handleDelete = id => {
    let oldUsers = this.state.userList;
    let newUsersArray = [];
    newUsersArray = oldUsers.filter(user => user.id !== id);
    this.setState({ userList: newUsersArray })
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        this.setState({ isDeleted: response.status })
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ isDeleted: null })
        }, 2000)
      })
  }
  render() {
    console.log(this.state.updateUser.id)
    console.log(this.state.isDeleted)
    const { userList, updateUser, selectedUser, isDeleted } = this.state;
    const { id } = this.state.updateUser;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={() => <LandingPage
              userID={id}
              selectedUser={selectedUser}
              selectUser={this.selectUser}
              handleEditUser={this.handleEditUser}
              handleDelete={this.handleDelete}
              isDeleted={isDeleted}
              userList={userList} />} />
            <Route path='/create' component={() => <CreateUserForm
              handleSubmit={this.handleSubmit} />} />
            <Route path={`/edit/:id`} component={() => <UpdateUser submitEditedUser={this.submitEditedUser} updateUser={updateUser} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
