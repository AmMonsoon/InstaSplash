import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchCaption } from '../store/image';
import { useParams } from 'react-router-dom';

function EditCaptionForm({ oldCaption, hideEdit }) {
    const {imageId} = useParams();
    const dispatch = useDispatch()
    const [caption, setCaption] = useState(oldCaption)


    const submitEdit = async (e) => {
        e.preventDefault()
        await dispatch(patchCaption(caption, imageId))
        hideEdit(e)
    }

    return (
        <div>
            <textarea value={caption} onChange={(e) => setCaption(e.target.value)}/>
            <div className="edit-caption-btn">
                <div className="edit-caption-btn" onClick={(e) => submitEdit(e)}><i className="fas fa-sync-alt"></i></div>
                <div className="edit-caption-btn" onClick={hideEdit}><i className="far fa-times-circle"></i></div>
            </div>

        </div>

    )
}

export default EditCaptionForm
