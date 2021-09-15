import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditCommentForm from './EditCommentForm';

function SingleComment({ comment }) {
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
                </div>
            }
        </>
        )
    }


    return (
        <div>
            {commentContent}
        </div>
    )
}

export default SingleComment
{/* <div className="commentBody-Div" key={comment.id}>{comment?.commentBody}</div> */}
