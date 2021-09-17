import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllComments } from '../store/image';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import './Comment.css'


function Comment() {
    const {imageId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(getAllComments(imageId))
        })()
    }, [imageId, dispatch])


    const comments = useSelector(state => Object.values(state.images.all[imageId]?.comments))

    return (
        <div>                
            {comments?.map((comment) => (
                <div className="single-comment-wrapper" key={comment.id}>
                    <SingleComment comment={comment} />
                </div>
            ))}
        </div>
    )
}
export default Comment
