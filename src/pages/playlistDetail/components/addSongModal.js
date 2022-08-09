import React, { useState} from 'react';
import { Form } from "react-bootstrap";
import Modal1 from "../../../components/modal/Modal1";
import axios from "axios";
import { toast } from "react-toastify";
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
  const [loading, setLoading] =useState(false)
  const [songFile, setSongFile] = useState();


  function handleSubmit(e) { 
    e.preventDefault();
     if (!form.name || !form.artist || !form.album || !form.lang)
       return toast.error("fill all fields");
    if (!songFile) return toast.error("song file must selected");
    setLoading(true)
    const formData = new FormData()
    formData.append("songFile",songFile)
    axios.post("/playlist/uploadSong", formData).then((res) => {
      const songPath = res.data.path;

      return axios.post(`/playlist/addSong/${playlistId}`, {
        ...form,
        link: songPath,
      });
    })
      .then((res) => {
        toast.success("song created successfully");
        onUpdate();
        onClose();
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message))
    .finally(() => {
      setLoading(false)
    })
  }

  function handleChangeAddSong(e) {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
    
  }

  function handleChangeFile(e) {
    const file = e.target.files[0];
    setSongFile(file);
  }

    return (
      <Modal1
        title="Create Playlist"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        loading={loading}
      >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={form.name}
                name="name"
                onChange={handleChangeAddSong}
                type="text"
                placeholder="Enter Song Name"
              />
            </Form.Group>
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
                name="lang"
                onChange={handleChangeAddSong}
              >
                <option value="">Choose...</option>
                <option>english</option>
                <option>germany</option>
                <option>persian</option>
                <option>arabic</option>
                <option>romanian</option>
                <option>turkish</option>
                <option>others</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Choose files </Form.Label>
            <Form.Control
              type="file"
              accept=".mp3"
              onChange={handleChangeFile}
            />
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