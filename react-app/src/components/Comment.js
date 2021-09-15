import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllComments } from '../store/image';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import './Comment.css'


function Comment() {
    const {imageId} = useParams()
    const dispatch = useDispatch()



    // const image = useSelector(state => state.images.all[imageId])
    const user = useSelector(state => state.session.user)
    const comments = useSelector(state => Object.values(state.images.all[imageId]?.comments))


    useEffect(() => {
        (async () => {
            await dispatch(getAllComments(imageId))
        })()
    }, [imageId, dispatch])



    return (
        <div>
            <h4>this is the comments section</h4>
            {comments?.map((comment) => (
                <div key={comment.id}>
                    <SingleComment comment={comment} />
                </div>
            ))}
        </div>
    )
}
export default Comment
