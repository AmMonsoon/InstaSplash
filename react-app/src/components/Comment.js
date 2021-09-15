import React, { useState, useEffect } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { getAllComments } from '../store/image';
import { useDispatch, useSelector} from 'react-redux';
import './Comment.css'


function Comment() {
    const {imageId} = useParams()
    const dispatch = useDispatch()

    const image = useSelector(state => state.images.all[imageId])
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        (async () => {
            await dispatch(getAllComments(imageId))
        })()
    }, [imageId])


    return (
        <div>
            {console.log("Image Id", imageId, "image", image)}
            <h4>this is the comments section</h4>
        </div>
    )
}
export default Comment
