import './App.css';
import Header from "./components/header/header";
import Main from './components/main/main';
import Footer from "./components/footer/footer";
import data from './data/data.json';
import React, { Component } from 'react';
import SelectedBeast from './components/selected-beast/selected-beast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: {},
      modeData: true
    }
  }
handleMode = () => {
  this.setState({
    modeData: !this.state.modeData
  })
  console.log("xxxxxxxxx")
}

  handleModal = (modalData) => {
    this.setState({
      showModal: !this.state.showModal,
      modalData: modalData
    })
  }

handleCloseModal = () => {
  this.setState({
    showModal: false
  })
}

  render() {
    return (
      <div className="App">
        <Header modeData={this.state.modeData}/>
        <SelectedBeast modeData={this.state.modeData} modalData={this.state.modalData} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        <Main modeData={this.state.modeData} data={data} handleModal={this.handleModal} handleMode={this.handleMode}/>
        <Footer modeData={this.state.modeData}/>
      </div>
    );
  };
};

export default App;