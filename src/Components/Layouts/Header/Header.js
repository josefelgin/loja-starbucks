import { Container, Row, Col } from 'react-grid-system';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {

    return (
        <div className='Header'>
            <Container>
                <Row align="center">
                    <Col xs={3} md={3}>        
                        <Logo />
                    </Col>
                    <Col xs={9} md={9}>
                        <Menu />
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
    
}

export default Header;