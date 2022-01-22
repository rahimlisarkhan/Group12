import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Layout } from "./components/Layout"
import { FormProduct } from './components/FormProduct';
import { ProductsContent } from './components/ProductsContent';
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      products: []
    }

    this.addProduct = this.addProduct.bind(this)
  }


  addProduct(form) {
    form.id = Date.now()
    this.setState({ products: [...this.state.products, form] })
  }


  render() {

    return (
      <Layout>
        <FormProduct addProduct={this.addProduct} />
        <ProductsContent products={this.state.products}/>
      </Layout>

    );
  }

}

export default App;
