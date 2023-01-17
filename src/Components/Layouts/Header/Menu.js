import { Visible, Hidden, Row, Col } from 'react-grid-system';
import { MdMenu } from "react-icons/md";
import SearchBar from '../Elements/SearchBar';

const Menu = () => {

    return (
        <div className='Menu'>
            <Hidden xs sm md>
                <Row align="center">
                    <Col justify="center" xs={7} md={7}>
                        <div className="Menu__search">
                            <SearchBar />
                        </div>
                    </Col>
                    <Col align="end"  xs={5} md={5}>
                        <ul className='Menu__nav'>
                            <li><a href='aaaa'>Home</a></li>
                            <li><a href='aaa'>Produtos</a></li>
                            <li><a href='contato'>Contato</a></li>
                        </ul>
                    </Col>
                </Row>
            </Hidden>
            <Visible xs sm md>
                <Row>
                    <Col xs={12} align="end">
                        <MdMenu className="Menu__mobile"/>
                    </Col>
                </Row>
            </Visible>
        </div>   
    );
}

export default Menu;    