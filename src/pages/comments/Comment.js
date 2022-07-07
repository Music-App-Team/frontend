import React, { useState, useEffect } from 'react'
import "./comment.scss";
import axios from "axios";
import { toast } from "react-toastify";
import Moment from 'react-moment';


export const Comment = () => {

    const [comments, setComments] = useState("")

    const [getComments, setGetComments] = useState([]);




    const handleSubmit = () => {
        axios.post("http://localhost:3010/playlist/addComment", { comments })
            .then(res => {
                toast.success("comment added successfully")
                window.location.reload()
            }).catch(err => toast.error(err.response?.data?.message || err.message))
    }

    const deletecomment = (id) => {
        axios.delete(`http://localhost:3010/playlist/deleteComment/${id}`)
            .then(res => {
                toast.success("comment deleted successfully")
            }).catch(err => toast.error(err.response?.data?.message || err.message))
            getComment()
    }

    useEffect(() => {
        getComment()
    }, []);


    
        function getComment() {
            axios
                .get("http://localhost:3010/playlist/getAllComments")
                .then((res) => setGetComments(res.data))
                .catch((err) => toast.error(err.response?.data?.message || err.message));
        }



    return (
        <div class="container-comment ">
            <div class="row ">
                <div class="col-md-12 "><h1>Comments ...</h1><hr className="hr" />
                    {getComments.length > 0 ? getComments.map((item) => {
                        if (item.comments.length > 0) {
                            return (
                                <>
                                    <div class="d-flex   flex-column comment-section">
                                        <div class="p-2">
                                            <div class="d-flex flex-column user-info">
                                                <div class="d-flex flex-column justify-content-start ml-2">
                                                    <span class="d-block font-weight-bold name">Marry Andrews</span>
                                                    <span class="date "><Moment format="lll">{item.comments[0].createdAt}</Moment></span>
                                                </div>
                                                <div class="mt-2">
                                                    <p class="comment-text">{item.comments[0].text}</p>
                                                    <div class="mt-2 text-right"><button class="btn-delete  float-end btn-primary btn-sm shadow-none" type="button" onClick={()=>deletecomment(item._id)}>Delete</button></div>
                                                </div>
                                            </div><hr className="hr" />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    }) : undefined}
                    <div class="d-flex flex-column p-2">
                        <div class="d-flex flex-row align-items-start"><textarea placeholder="Review" class="form-control ml-1 shadow-none textarea" value={comments.text} onChange={(e) => setComments({ text: e.target.value })}></textarea></div>
                        <div class="mt-2 text-right"><button class="btn  float-end btn-primary btn-sm shadow-none" type="button" onClick={handleSubmit}  >Subment</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
