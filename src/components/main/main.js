import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import HornedBeast from '../horned-beast/horned-beast';
import data from '../../data/data.json';
import Row from 'react-bootstrap/Row';


class main extends Component {



    render() {
        return (
            <div className="main">
                    <Row xs={1} md={3} >

                {data.map((item) => {
                    return <HornedBeast title = {item.title} image = {item.image_url} description = {item.description}/>
                }
            )}
            </Row>
            </div>
        );
    }
}

export default main;