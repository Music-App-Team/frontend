import React from "react";

function Playlist() {
  return (
    <div class="playlist">
      <div class="navbar bg-light">
        <div class="container-fluid">
          <h2>Play Lists</h2>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Playlist;
