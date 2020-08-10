import React from 'react';
import { Row, Col, button } from 'reactstrap';
import {Link } from 'react-router-dom';  

const BackComponent = () => {
    return (
        <Row className="mb-2">
            <Col>
                <Link to="/">
                    <button color="dark" className="mr-2">
                        Back
                    </button>
                </Link>
            </Col>
        </Row>
    )
}

export default BackComponent
