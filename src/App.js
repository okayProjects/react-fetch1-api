import React, { Component } from 'react';
import UsersList from './Components/UsersList';
import ButtonFetch from './Components/ButtonFetch';
import style from './App.module.css';

const API = 'https://randomuser.me/api/?results=1';

class App extends Component {
  state = {
    users: []
  }

  DataFetchHandler = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        } else throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        })
        )
      })
      .catch(error => console.log(error + ' shit happens at times'))
  }

  render() {

    return (
      <div className={style.App}>
        <ButtonFetch click={this.DataFetchHandler} />
        {this.state.users.length > 0 && <UsersList users={this.state.users} />}
      </div>
    );
  }
}

export default App;
