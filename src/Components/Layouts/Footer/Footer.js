import { Container, Row, Col } from 'react-grid-system';

const Footer = () => {

    return (
        <div className='Footer'>
            <Container align="center" fluid>
                <Row justify="end" >
                    <Col>
                        <h4>Este é um site desenvolvido para estudos de react</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default Footer;