import React, { Component, useState } from "react";

import "./personalcard2.css";

class PersonalCard2 extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
  }
  handleclick = async () => {
    console.log("hello persnolcard");
  };

  render() {
    return (
      <>
        <div class="card">
          <div class="card-border-top"></div>
          <div class="img"></div>
          <span> {this.props.name}</span>
          <p class="job"> {this.props.email}</p>
          <button onClick={this.handleclick}> Click</button>
        </div>
      </>
    );
  }
}

export default PersonalCard2;
