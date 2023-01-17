import { React, useState, useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import ProductItem from "./ProductItem";
import axios from 'axios';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className='Products'>
            <Row>
                <Col>
                    <ProductItem products={products}/>
                </Col>
            </Row>
        </div>
    );
}

export default Products;