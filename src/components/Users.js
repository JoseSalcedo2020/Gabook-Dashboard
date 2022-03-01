import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      unState: true,
    };
  }
  render() {
    let contenido = this.state.unState ? <h1>true</h1> : <h1>false</h1>;
    return (
      <div>
        <h1>{contenido}</h1>
	
      </div>
    );
  }
}
export default Users;
