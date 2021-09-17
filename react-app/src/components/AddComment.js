import React, { useState } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { addNewComment } from '../store/image';
import { useDispatch } from 'react-redux';
import './AddComment.css'

function AddComment() {
    const {imageId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    // const userId = useSelector(state => state.session.user.id)

    const [commentBody, setCommentBody] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const comment = {
            commentBody
        }
        if (commentBody.length < 256) {
            setCommentBody('')
            let createdComment = await dispatch(addNewComment(comment, imageId))
            if(createdComment) {
                history.push(`/images/${imageId}`)
            }
        } else {
            alert("Please limit your comment to 255 Characters")
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                className="add-comment-field"
                placeholder="Comment"
                type="text"
                required
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                />
                <button className="add-comment-submit" type="submit" disabled={!commentBody.length} >Post</button>
            </form>
        </section>
    )
}

export default AddComment
