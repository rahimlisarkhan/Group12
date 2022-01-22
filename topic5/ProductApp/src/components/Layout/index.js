import React from "react"
import { Container, Row } from "react-bootstrap"


export class Layout extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
        )
    }

}