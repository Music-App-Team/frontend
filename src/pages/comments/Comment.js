import React, { useState, useEffect } from "react";
import "./comment.scss";
import axios from "axios";
import { toast } from "react-toastify";
import Moment from "react-moment";
import { useParams } from "react-router-dom";

export const Comment = () => {
    const { playlistId } = useParams();

    const [text, setText] = useState("");

    const [comments, setComments] = useState([]);

    const handleSubmit = () => {
        axios
            .post("/playlist/addComment/" + playlistId, { text })
            .then((res) => {
                toast.success("comment added successfully");
                setText("");
                getData();
            })
            .catch((err) => toast.error(err.response?.data?.message || err.message));
    };

    const deletecomment = (id) => {
        axios
            .delete(`/playlist/deleteComment/${playlistId}/${id}`)
            .then((res) => {
                toast.success("comment deleted successfully");
                getData();
            })
            .catch((err) => toast.error(err.response?.data?.message || err.message));
    };

    function getData() {
        axios
            .get(`/playlist/getAllComments/${playlistId}`)
            .then((res) => setComments(res.data))
            .catch((err) => toast.error(err.response?.data?.message || err.message));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div class="container-comment ">
            <div class="row ">
                <div class="col-md-12 ">
                    <h1>Comments ...</h1>
                    <hr className="hr" />
                    {comments.map((item) => {
                        return (
                            <>
                                <div class="d-flex   flex-column comment-section">
                                    <div class="p-2">
                                        <div class="d-flex flex-column user-info">
                                            <div class="d-flex flex-column justify-content-start ml-2">
                                                <span class="d-block font-weight-bold name">
                                                    {item.user.firstName}
                                                </span>
                                                <span class="date ">
                                                    <Moment format="lll">{item.createdAt}</Moment>
                                                </span>
                                            </div>
                                            <div class="mt-2">
                                                <p class="mx-0">{item.text}</p>
                                                <div class="mt-2 text-right">
                                                    <button
                                                        class="btn-delete  float-end btn-primary btn-sm shadow-none"
                                                        type="button"
                                                        onClick={() => deletecomment(item._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hr" />
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    <div class="d-flex flex-column p-2">
                        <div class="d-flex flex-row align-items-start">
                            <textarea
                                placeholder="Review"
                                class="form-control ml-1 shadow-none textarea"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <div class="mt-2 text-right">
                            <button
                                class="btn  float-end btn-primary btn-sm shadow-none"
                                type="button"
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
