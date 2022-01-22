

import { Field, Form, Formik } from "formik"
import React from "react"
import { Button, Col, Form as BForm } from "react-bootstrap"
import { FileField } from "../FileField";


export class FormProduct extends React.Component {
    initialValues = {
        title: '',
        price: '',
        category: '',
        image: ''
    }

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    validate(values) {
        let error = {}
        if (!values.image) {
            error.image = "Please upload your product image"
        }

        return error
    }

    handleSubmit(values, actions) {
        this.props.addProduct(values)
        actions.resetForm()
    }

    render() {
        const inlineStyle = {
            minHeight: "100vh"
        }

        return (
            <Col md="4" className="bg-warning" style={inlineStyle}>
                <h1 className="display-5 text-white">Form</h1>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.handleSubmit}
                    validate={this.validate}
                >
                    {(formik) => {
                        // console.log(formik);

                        return <Form>
                            <BForm.Group className="mb-3 text-white">
                                <BForm.Label>Title</BForm.Label>
                                <Field placeholder="Exs. Margarita" name="title" className="form-control" />
                                {/* <BForm.Text className="text-dark">
                                    We'll never share your email with anyone else.
                                </BForm.Text> */}
                            </BForm.Group>
                            <BForm.Group className="mb-3 text-white">
                                <BForm.Label>Price</BForm.Label>
                                <Field type="number" placeholder="Exs. 12.99" name="price" className="form-control" />
                                {/* <BForm.Text className="text-dark">
                                    We'll never share your email with anyone else.
                                </BForm.Text> */}
                            </BForm.Group>

                            <BForm.Group className="mb-3 text-white">
                                <BForm.Label>Category</BForm.Label>
                                <BForm.Select onChange={(e) => formik.setFieldValue("category", e.target.value)}>
                                    <option value="pizza" >Pizza</option>
                                    <option value="fast_food">Fast Food</option>
                                    <option value="drink">Drink</option>
                                    <option value="hamburger">Hamburger</option>
                                    <option value="fries">Fries</option>
                                </BForm.Select>
                            </BForm.Group>

                            <BForm.Group className="mb-3 text-white">
                                <FileField onFile={formik.setFieldValue} keyImage="image" />
                                {formik.errors.image && <BForm.Text className="text-dark">
                                    {formik.errors.image}
                                </BForm.Text>}
                            </BForm.Group>

                            <Button variant="dark" type="submit" size="lg" className="w-100 mt-3" >Add Product</Button>
                        </Form>
                    }}

                </Formik>
            </Col>
        )
    }

}