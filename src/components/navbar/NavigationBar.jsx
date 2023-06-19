import React, { Component } from "react";
import { navLinks } from "../../data/navbarLinks";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavigationBar extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand href="#">BookShop</Navbar.Brand>
                    <Nav className="me-auto">
                        {navLinks.map((link)=>{
                            return(
                                <Nav.Link key={link.id} href={link.href}>{link.title}</Nav.Link>
                            )
                        })}
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar