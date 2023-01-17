import { Container, Row, Col } from 'react-grid-system';
import Products from "./Products/Products";

const Page = () => {

    return (
        <div className='Page'>
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        busca
                    </Col>
                    <Col xs={12} md={12}>
                        <Products />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page;