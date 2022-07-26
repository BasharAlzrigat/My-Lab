import "./header.css";
import NavBar from "../nav/nav";
import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <>
      <NavBar title = "Beast World"/>
      </>
    );
  }
}

export default header;