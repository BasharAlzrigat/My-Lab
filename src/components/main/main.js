import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import HornedBeast from '../horned-beast/horned-beast';
import Row from 'react-bootstrap/Row';
import "./main.css";
import Filtering from "../filtering/filtering ";


class main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        if (e.target.value === "0") {
            this.setState({
                data: this.props.data
            })

        } else if (e.target.value !== "0") {

            let newData = this.props.data.filter(item => {
                return item.horns === parseInt(e.target.value)
            });
            this.setState({
                data: newData
            })
        }
    }
    handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value.length > 0) {
            this.setState({
                data: this.props.data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            })
        }else{
            this.setState({
                data: this.props.data
            })
        }
    }

    render() {
        return (
            <div className={this.props.modeData ? "main" : "main-dark main"} >
                <Filtering handleSearch={this.handleSearch} modeData={this.props.modeData} handleChange={this.handleChange} handleMode={this.props.handleMode} />
                <Row xs={1} md={3} >

                    {this.state.data.map((item, index) => {
                        return <HornedBeast key={item._id} handleMode={this.handleMode} modeData={this.state.modeData} data={item} handleModal={this.props.handleModal} />
                    }
                    )}
                </Row>
            </div>
        );
    }
}

export default main;