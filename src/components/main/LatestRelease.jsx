import React, { Component } from "react";
import CardContainer from "./cardContainer/CardContainer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from "../../data/historyBooks.json"

class LatestRelease extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {books.map((book) => {
                        return (
                            <Col key={book.asin}>
                                <CardContainer
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                    btnTitle="Detail"
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default LatestRelease