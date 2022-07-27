import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import HornedBeast from '../horned-beast/horned-beast';
import Row from 'react-bootstrap/Row';


class main extends Component {



    render() {
        return (
            <div className="main">
                    <Row xs={1} md={3} >

                {this.props.data.map((item) => {
                    return <HornedBeast data={item} handleModal={this.props.handleModal}/>
                }
            )}
            </Row>
            </div>
        );
    }
}

export default main;