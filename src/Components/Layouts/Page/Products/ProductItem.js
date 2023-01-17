import { Col, Row } from "react-grid-system";

const ProductItem = (props) => {

    return (
        <Row>
            {
                props.products.map((product, index) => {
                    return (
                        <Col key={product.id}>
                            <div className='ProductItem'>
                                <div className='ProductItem__image'>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className='ProductItem__name'>
                                    <h3>{product.name}</h3>
                                </div>
                                <div className='ProductItem__price'>
                                    <h3>{product.price}</h3>
                                </div>
                                <div className='ProductItem__description'>
                                    <p>{product.description}</p>
                                </div>
                                <div>
                                    <button className="ProductItem__submit">Adicionar ao carrinho</button>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    )

}

export default ProductItem;