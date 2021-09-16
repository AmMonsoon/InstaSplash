import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditCommentForm from './EditCommentForm';
import { deleteComment } from '../store/image';
import "./SingleComment.css"

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
                <div>{comment.commentBody}</div>
            {
                comment?.userId === user.id &&
                <div>
                <button onClick={displayEdit}>Edit</button>
                <button onClick={(e) => handleDelete(e)}>Delete</button>
                </div>
            }
        </>
        )
    }


    return (
        <div className="singleComment__wrapper">
            {commentContent}
        </div>
    )
}

export default SingleComment
