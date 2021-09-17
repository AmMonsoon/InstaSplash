import React, { useState, useEffect } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { fetchImage } from '../store/image';
import { useDispatch, useSelector} from 'react-redux';
import EditCaptionForm from "./EditCaptionForm"
import { destroyImage, postLike, destroyLike } from '../store/image';
import './Image.css'
import Comment from './Comment';
import AddComment from './AddComment';

function Image(){
    const history = useHistory()
    const {imageId} = useParams();
    const dispatch = useDispatch()

    const image = useSelector(state => state.images.all[imageId])
    const user = useSelector(state => state.session.user)
    const like = useSelector(state => state.images.all[imageId]?.likes?.[user.id])
    const [showEdit, setShowEdit] = useState(false)



    useEffect(() => {
        if(!imageId){
            return;
        }
        (async () => {

            await dispatch(fetchImage(imageId));
          })();
    },[imageId, dispatch])

    if (!image) {
        return null;
    }

    let captionContent;
    const displayEdit = (e) => {
        e.preventDefault()
        setShowEdit(true)
    }

    const hideEdit = (e) => {
        e.preventDefault()
        setShowEdit(false)
    }

    if (showEdit){
        captionContent = <EditCaptionForm oldCaption={image.caption} hideEdit={hideEdit}/>
    }
    else{
        captionContent = (
        <>
            <img src={image?.poster?.profilePic}  className="user-profilepic-small"></img>
            <h1>{image?.poster?.username}</h1>
            <h2>{image?.caption}</h2>
            {
             user.id === image?.userId &&  <button onClick={displayEdit}>Edit</button>

            }
        </>
        )
    }

    const deleteImage = async(e) =>{
        e.preventDefault()
        await dispatch(destroyImage(imageId))
        history.push('/images/following')
    }

    const handleUnlike = async(e) => {
        e.preventDefault()
        await dispatch(destroyLike(imageId, user.id))
    }

    const handleLike = async(e) => {
        e.preventDefault()
        await dispatch(postLike(imageId, user.id))
    }

    return(

        <div className='image-page-container'>
            
            <img className='image-page-pic' src={image.imageUrl} alt='' />
            <div className='image-info-container'>
                <div className="image-user-container">
                    <img src={image?.poster?.profilePic}  className="user-profilepic-small"></img>
                    <h1>{image?.poster?.username}</h1>
                </div>
                <div className='image-caption-container'>
                <div>
                {
                    user.id === image?.userId &&  <button onClick={e => deleteImage(e)}>Delete Image</button>

                }
                </div>
                    {captionContent}
                </div>
                <div>
                    <div>
                        <Comment />
                        <div>
                            { like && <button onClick={e => handleUnlike(e)}>Unlike</button> }
                            { !like && <button onClick={e => handleLike(e)}>Like</button>}
                            <div>
                                 Likes: {image.likes && Object.keys(image?.likes).length}
                            </div>
                            <AddComment />
                        </div>
                        <div>
                    
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Image;
