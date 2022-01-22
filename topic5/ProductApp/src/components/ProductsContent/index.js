import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductCard} from "../ProductCard"


export class ProductsContent extends Component {

    render(){
        return(
            <Col md="8">
                <Row>
                    {this.props.products.length 
                     ? this.props.products.map(item => <ProductCard key={item.id} {...item} /> )
                     : <h1 className="text-center display-2">Not Product</h1>
                }
                </Row>
            </Col>
        )
    }
}