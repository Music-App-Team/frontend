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
                    <Col className="playlistitem" lg={3}>         <PlaylistItem /> </Col>
                    <Col lg={9}>
                        <div class="container  my-5">
                            <div class="row ">
                                <div class="col-md-12 "><h1>Comments ...</h1><hr className="hr" />
                                    <div class="d-flex   flex-column comment-section">
                                        <div class="p-2">
                                            <div class="d-flex flex-row user-info">
                                                <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date ">Shared publicly - Jan 2020</span></div>
                                            </div>
                                            <div class="mt-2">
                                                <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div class="mt-2 text-right"><button class="btn-delete  float-end btn-primary btn-sm shadow-none" type="button">Delete</button></div>
                                        </div><hr className="hr" />
                                        <div class="p-2">
                                            <div class="d-flex flex-row user-info">
                                                <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date ">Shared publicly - Jan 2020</span></div>
                                            </div>
                                            <div class="mt-2">
                                                <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div class="mt-2 text-right"><button class="btn-delete  float-end btn-primary btn-sm shadow-none" type="button">Delete</button></div>
                                        </div><hr className="hr" />
                                        <div class="p-2">
                                            <div class="d-flex flex-row user-info">
                                                <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date ">Shared publicly - Jan 2020</span></div>
                                            </div>
                                            <div class="mt-2">
                                                <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div class="mt-2 text-right"><button class="btn-delete  float-end btn-primary btn-sm shadow-none" type="button">Delete</button></div>
                                        </div>< hr className="hr" />

                                        <div class="d-flex flex-column p-2">
                                            <div class="d-flex flex-row align-items-start"><textarea placeholder="Review" class="form-control ml-1 shadow-none textarea"></textarea></div>
                                            <div class="mt-2 text-right"><button class="btn  float-end btn-primary btn-sm shadow-none" type="button">Subment</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}
