import React, { Component } from 'react';

class UserInput extends Component {
  state= { username: '', hometown: '' };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.name);
    this.setState({
      name:'',
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    })
  }
  render() {
    return(
      <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>User</label>
          <input type="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/>
          <input type="hometown" onChange={(event) => this.handleChange(event)} value={this.state.hometown}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
