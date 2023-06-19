import React, { Component } from "react";
import Container from 'react-bootstrap/Container';

class JumbotronContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="mt-5">
                <Container>
                    <h1 className="display-4 pt-3">BookShop</h1>
                    <p className="lead">La libreria online dove puoi acquistare libri, eBook, cd, dvd, videogiochi e idee regalo. Letture e intrattenimento per ogni occasione!.</p>
                </Container>
            </div>
        )
    }
}

export default JumbotronContainer