import React, { useState, useEffect } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { addNewComment } from '../store/image';
import { useDispatch, useSelector} from 'react-redux';
import './AddComment.css'

function AddComment() {
    const {imageId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)

    const [commentBody, setCommentBody] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const comment = {
            commentBody
        }
        let createdComment = await dispatch(addNewComment(comment, imageId))
        if(createdComment) {
            history.push(`/images/${imageId}`)
        }
    }

    const handleCancel = async(e) => {
        e.preventDefault();
        history.push(`/images/${imageId}`)
    }

    return (
        <section>
            <h1>comment form</h1>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Comment"
                type="text"
                required
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                />
                <button type="submit">Submit Comment</button>
                <button type="click" onClick={handleCancel}>Cancel</button>
            </form>
        </section>
    )
}

export default AddComment
