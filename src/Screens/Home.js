import React from 'react'
import {Row, Col} from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product'
function Home() {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
               {products.map((product)=>(
                <Col>
            <Product value={product}/>
                </Col>
               ))}
            </Row>
        </div>
    )
}

export default Home
