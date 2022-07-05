import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import Modal1 from "../../components/modal/Modal1";
import axios from "axios";
import { toast } from "react-toastify";

const CreatePlaylistModal = ({ open, onClose, onUpdate }) => {

    const [title, setTitle] = useState("")

    const handleSubmit = () => {
        axios.post("http://localhost:3010/playlist/addPlaylist", { title })
            .then(res => {
                toast.success("playlist added successfully")
                onUpdate()
                onClose()
        }).catch(err=>toast.error(err.response?.data?.message || err.message))
    }

    useEffect(() => {
        if(!open)
           setTitle("")
    }, [open])
    
    return (
        <Modal1 title="Create Playlist" open={open} onClose={onClose} onSubmit={handleSubmit}
        >

         <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="enter playlist title" autoFocus
                    />
                </Form.Group>
            </Form>
        </Modal1>
    )
}

export default CreatePlaylistModal;