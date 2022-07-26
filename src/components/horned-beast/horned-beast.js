import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./horned-beast.css";
import React, { Component } from 'react';

class hornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        };
    }

    handleClick = () => {
        this.setState({
            favorites: this.state.favorites + 1
        });
    }

    render() {
        return (
            <div className = "card-container">
                <Col>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image} alt={this.props.title} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                            <Button variant="primary" onClick={() => { this.handleClick() }}>Like 👍</Button>
                            <p>💖{this.state.favorites}</p>
                        </Card.Body>
                    </Card>
                </Col>

            </div>
        );
    }
}

export default hornedBeast;