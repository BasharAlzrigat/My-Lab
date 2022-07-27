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
      modalData: {}
    }
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
        <Header />
        <SelectedBeast modalData={this.state.modalData} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        <Main data={data} handleModal={this.handleModal}/>
        <Footer />
      </div>
    );
  };
};

export default App;
