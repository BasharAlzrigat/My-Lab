import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import HornedBeast from '../horned-beast/horned-beast';
import Row from 'react-bootstrap/Row';
import "./main.css";
import Filtering from "../filtering/filtering ";


class main extends Component {

constructor(props){
    super(props)
    this.state = {
        data: this.props.data,
    }
}
handleChange = (e) => {
    e.preventDefault()
if(e.target.value === "0"){
    this.setState({
        data: this.props.data
    })

}else if (e.target.value !== "0") {

    let newData = this.props.data.filter(item => {
        return item.horns === parseInt(e.target.value)
    });
this.setState({
    data: newData
})


    }
}

    render() {
        return (
            <div className="main">
                <Filtering handleChange={this.handleChange}/>
                    <Row xs={1} md={3} >

                {this.state.data.map((item) => {
                    return <HornedBeast data={item} handleModal={this.props.handleModal}/>
                }
            )}
            </Row>
            </div>
        );
    }
}

export default main;