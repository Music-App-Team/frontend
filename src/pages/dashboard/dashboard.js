import React from "react";
import "./dashboard.scss";
import { CgTrashEmpty } from "react-icons/cg";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function Dashboard() {
  return (
    <div className="container-fluid">
      <Container className="container-playlist">
        <h1 className="playlist-h1">Home</h1>
        <Table className="playlist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Happy songs</td>
              <td>Saman</td>
              <td>
                <div className="container-action">
                  {" "}
                  <button className="button-playlist">Open</button>
                  <a href="url">
                    <CgTrashEmpty className="trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Light songs</td>
              <td>John</td>
              <td>
                <div className="container-action">
                  {" "}
                  <button className="button-playlist">Open</button>
                  <a href="url">
                    <CgTrashEmpty className="trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Sad songs</td>
              <td>Sara</td>
              <td>
                <div className="container-action">
                  {" "}
                  <button className="button-playlist">Open</button>
                  <a href="url">
                    <CgTrashEmpty className="trash" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Dashboard;


