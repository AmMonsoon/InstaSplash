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
            <div className="edit-caption-btn">
                <div className="edit-caption-btn" onClick={(e) => submitEdit(e)}><i class="fas fa-sync-alt"></i></div>
                <div className="edit-caption-btn" onClick={hideEdit}><i class="far fa-times-circle"></i></div>
            </div>
        </div>

    )
}

export default EditCommentForm
