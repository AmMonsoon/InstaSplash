import React, { useState, useEffect } from 'react';
import { useParams ,useHistory, NavLink} from 'react-router-dom';
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
    const imageCaption = useSelector(state => state.images.all[imageId]?.caption)
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
            <div className="image-page-caption">
                <img src={image?.poster?.profilePic}  className="user-profilepic-small"></img>
                <NavLink to={`/users/${image?.poster?.id}`} className="image-page-caption-username">{image?.poster?.username}</NavLink>
                <p>{imageCaption}</p>
            </div>
             {user.id === image?.userId && <div onClick={displayEdit}><i class="fas fa-edit"></i></div>}
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
        document.getElementById("heart").setAttribute("class", "far fa-heart fa-lg")
        await dispatch(destroyLike(imageId, user.id))
    }

    const handleLike = async(e) => {
        e.preventDefault()
        document.getElementById("heart").setAttribute("class", "fas fa-heart fa-lg")
        await dispatch(postLike(imageId, user.id))
    }

    const handleBothLikes = async(e) => {
        e.preventDefault()
        if (like) {
            handleUnlike(e)
        } else {
            handleLike(e)
        }
    }

    return(

        <div className='image-page-container'>

            <div className="image-pic-and-info-container">
                <img className='image-page-pic' src={image.imageUrl} alt='' />
                <div className='image-info-container'>
                    <div className="image-user-container">
                        <img src={image?.poster?.profilePic}  className="user-profilepic-small"></img>
                        <NavLink to={`/users/${image?.poster.id}`} className="image-poster-username">{image?.poster?.username}</NavLink>
                        <div className="delete-image">
                        {
                            user.id === image?.userId &&  <button className="delete-image-btn" onClick={e => deleteImage(e)}>Delete Image</button>

                        }
                        </div>
                    </div>
                    <div className='image-caption-container'>
                        <div>
                            {captionContent}
                        </div>
                    </div>
                    <div className="image-comments-section">
                        <Comment />
                    </div>
                    <div className="image-likes-comments">
                        <div className="image-likes-and-btn">
                            <div id="heart-div" className="image-likes-btn" onClick={e => handleBothLikes(e)}>
                                <i id="heart" class="far fa-heart fa-lg"></i>
                            </div>
                            <div>
                                {image.likes && Object.keys(image?.likes).length} likes
                            </div>
                        </div>
                        <AddComment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;
