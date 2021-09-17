import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditCommentForm from './EditCommentForm';
import { deleteComment } from '../store/image';
import "./SingleComment.css"
import { NavLink } from 'react-router-dom';

function SingleComment({ comment }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const [showEdit, setShowEdit] = useState(false)

    const displayEdit = (e) => {
        e.preventDefault()
        setShowEdit(true)
    }

    const hideEdit = (e) => {
        e.preventDefault()
        setShowEdit(false)
    }

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch(deleteComment(comment.id, comment.imageId))
    }

    let commentContent;
    if (showEdit){
        commentContent = <EditCommentForm oldComment={comment.commentBody} hideEdit={hideEdit} commentId={comment.id}/>
    }
    else{
        commentContent = (
            <>
                <div className="comment-body-container">
                    <img alt='' className="user-profilepic-small" src={comment?.user?.profilePic}/>
                    <NavLink className="single-comment-username" to={`/users/${comment?.userId}`}>{comment?.user?.username}</NavLink>
                    <div className="comment-body-p">{comment.commentBody}</div>
                </div>
            {
                comment?.userId === user.id &&
                <div className="edit-comment-btns">
                    <div className="edit-comment-btn" onClick={displayEdit}><i className="fas fa-edit"></i></div>
                    <div onClick={(e) => handleDelete(e)}><i className="far fa-trash-alt"></i></div>
                </div>
            }
        </>
        )
    }


    return (
        <>
            {commentContent}
        </>
    )
}

export default SingleComment
