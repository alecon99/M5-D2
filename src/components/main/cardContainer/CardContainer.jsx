import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../cardContainer/CardContainer.css"

class CardContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card className="mb-3">
                <Card.Img id="product-image" variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title id="product-title">{this.props.title}</Card.Title>
                    <Card.Text>€ {this.props.price}</Card.Text>
                    <Button variant="primary">{this.props.btnTitle}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default CardContainer