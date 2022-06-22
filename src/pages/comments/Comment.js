import React from 'react'
import "./comment.scss";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const Comment = () => {
    return (
        <div>
            <Header />
            <Container fluid >
                <Row>
                    <Col className="playlistitem" lg={3}> </Col>
                    
                    <Col lg={9}>haloo</Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}
