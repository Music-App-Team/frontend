import React from "react";
import "./playList.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";



function Playlist() {
  return (
    <div>
      <Header />

      <Container fluid>
        <Row>
          <Col className="playlistitem ps-0" lg={3}>
            {" "}
            <PlaylistItem />{" "}
          </Col>
          <Col lg={9}>
            <h2 class="playlist-h2"> Playlist</h2>
          </Col>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
  // return (
  //   <div className="playlist">
      

  //       {/* <h1>Playlist</h1>
  //       <button> Create</button> */}
  //       {/* <table class="table-playlist">
  //         <thead>
  //           <tr>
  //             <th>First</th>
  //             <th>Last</th>
  //             <th>Handle</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>Mark</td>
  //             <td>Otto</td>
  //             <td>@mdo</td>
  //           </tr>
  //           <tr>
  //             <td>Jacob</td>
  //             <td>Thornton</td>
  //             <td>@fat</td>
  //           </tr>
  //           <tr>
  //             <td>3</td>
  //             <td>Larry the Bird</td>
  //             <td>@twitter</td>
  //           </tr>
  //         </tbody>
  //       </table> */}
  //     </div>
  //   </div>
  // );
}

export default Playlist;
