import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import "./filtering.css";

class Filtering extends Component {

    render() {
        return (
            <div className="filtering-container">
                <div className="filtering">
                    <Form>
                        <fieldset id="horned-select">
                            <Form.Group className="mb-3">
                                <Form.Label className={this.props.modeData ? "" : "lable-dark"}>Select Number of Hornes</Form.Label>
                                <Form.Select onChange={(e) => this.props.handleChange(e)} >
                                    <option value="0">All</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="100">100</option>
                                </Form.Select>
                            </Form.Group>
                        </fieldset>
                    </Form>
                    <Button onClick={this.props.handleMode} className="btn-switcher" variant={this.props.modeData ? "dark" : "light"}>{this.props.modeData ? "Dark" : "Light"}</Button>
                    {/* <Button variant="light"></Button> */}
                </div>
                <InputGroup className="search-bar">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Search Here
                    </InputGroup.Text>
                    <Form.Control onChange={(e)=> this.props.handleSearch(e)} aria-label="Default"aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>
            </div>
        );
    }
}

export default Filtering;

