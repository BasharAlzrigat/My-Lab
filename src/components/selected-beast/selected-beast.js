import React, { Component } from 'react';
import './selected-beast.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {
    render() {
        return (
            <div>
                <>
                    <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.modalData.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="Modal-Body">
                            <img class="Modal-Body-img" src={this.props.modalData.image_url} alt={this.props.modalData.title} />
                            <p>{this.props.modalData.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}

export default SelectedBeast;