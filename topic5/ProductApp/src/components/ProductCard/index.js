import { Component } from "react";
import { Col, Card } from "react-bootstrap";

export class ProductCard extends Component {

    render() {
        let {title,image,price,category } = this.props

        return (
            <Col md="3" className="mt-4">
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" height="200" src={URL.createObjectURL(image)} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {category}
                        </Card.Text>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

// src={URL.createObjectURL(uploadImg)}