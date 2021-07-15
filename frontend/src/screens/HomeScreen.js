import React,{useState,useEffect} from 'react'
import { Row ,Col } from 'react-bootstrap'
import Product from '../components/Product';
import Loader from '../components/Loader';
import {useDispatch,useSelector  } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';



function HomeScreen() {
    const dispatch =useDispatch()
    const productList =useSelector(state=>state.productList)
    const {error,loading,products} = productList

    useEffect(() => {
       
        dispatch(listProducts ())

    },[dispatch])

    return (
        <div>
            <h2>Latest Products</h2>
                {loading ? <Loader/> 
                :error ? <Message variant='danger'>{error}</Message>
                :  
                <Row>
                {products.map(product => (
                    <Col key={product._id} md={12} lg={6} md={4} xl={3}>
                  <Product product={product} />
                    </Col>
                ))}
            </Row>
                
            }

           
            
        </div>
    )
}

export default HomeScreen
