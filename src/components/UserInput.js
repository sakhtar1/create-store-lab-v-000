import React, { Component } from 'react';

class UserInput extends Component {
  state= { name: ''};

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
          <label>Restaurant</label>
          <input type="name" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
