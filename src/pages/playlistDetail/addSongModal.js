import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import Modal1 from "../../components/modal/Modal1";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

const AddSongModal = ({ open, onClose, onUpdate, playlistId }) => {
  
  const [form, setForm] = useState({
    name:"",
    artist: "",
    album: "",
    lang: "",
    link:"",
    
  })
  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`/playlist/addSong/${playlistId}`,form)
  }


  function handleChangeAddSong(e) {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
    
  }

    return (
      <Modal1
        title="Create Playlist"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={form.title}
                name="title"
                onChange={handleChangeAddSong}
                type="text"
                placeholder="Enter Song Name"
              />
            </Form.Group>
            {/*  <Form.Group as={Col} controlId="Length">
              <Form.Label>Length (sec)</Form.Label>
              <Form.Control type="number" placeholder="123" />
            </Form.Group> */}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="album">
              <Form.Label>Album</Form.Label>
              <Form.Control
                value={form.album}
                name="album"
                onChange={handleChangeAddSong}
                type="text"
                placeholder="Enter Album Name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="Length">
              <Form.Label>Artist</Form.Label>
              <Form.Control
                value={form.artist}
                name="artist"
                onChange={handleChangeAddSong}
                type="text"
                placeholder="Enter Artist Name"
              />
            </Form.Group>
          </Row>
          <Row className="col-md-6 mb-3">
            <Form.Group as={Col} controlId="language" atr="language">
              <Form.Label>Language</Form.Label>
              <Form.Select
                defaultValue="language"
                value={form.lang}
                name="language"
                onChange={handleChangeAddSong}
              >
                <option  value="">Choose...</option>
                <option>english</option>
                <option>germany</option>
                <option>persian</option>
                <option>arabic</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Choose files </Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <h4>OR</h4>
          <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        </Form>
      </Modal1>
    );
}

export default AddSongModal;