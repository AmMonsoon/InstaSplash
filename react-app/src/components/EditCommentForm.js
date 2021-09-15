import { useState } from "react"
import { useDispatch } from "react-redux"
import { editAComment } from "../store/image"
import { useParams } from "react-router-dom"

function EditCommentForm({ oldComment, hideEdit, commentId }) {
    const { imageId } = useParams();
    const dispatch = useDispatch();

    const [commentBody, setCommentBody] = useState(oldComment)

    const submitEdit = async(e) => {
        e.preventDefault();
        await dispatch(editAComment(commentBody, commentId, imageId))
        hideEdit(e)
    }

    return(
        <div>
            <textarea value={commentBody} onChange={(e) => setCommentBody(e.target.value)} />
            <button onClick={(e) => submitEdit(e)}>Update</button>
            <button onClick={hideEdit}>Cancel</button>
        </div>

    )
}

export default EditCommentForm
