import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../Assets/logo.png'

const Header = () => {
    return (
        <Container className='box-shadow' fluid>
            <Container className="header-full">
                    <Row>
                        <Col>
                            <div className="log">
                                <img src={logo} alt="" />
                            </div>
                        </Col>
                        <Col>
                            <nav>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/Blog'>Blog</NavLink>
                                <NavLink to='/login'>Login</NavLink>
                            </nav>
                        </Col>
                    </Row>
            </Container>
        </Container>
    );
};

export default Header;