import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import Product from '../components/Product';

import products from '../products';

function HomeScreen() {
    return (
        <div>
            <h2>Latest Products</h2>
            <Row>
                {products.map(product => (
                    <Col key={product._id} md={12} lg={6} md={4} xl={3}>
                  <Product product={product} />
                    </Col>
                ))}
            </Row>
            
        </div>
    )
}

export default HomeScreen
