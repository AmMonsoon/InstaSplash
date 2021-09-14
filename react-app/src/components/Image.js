import React, { useState, useEffect } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { fetchImage } from '../store/image';
import { useDispatch, useSelector } from 'react-redux';
import EditCaptionForm from "./EditCaptionForm"
import { destroyImage } from '../store/image';
import './Image.css'
function Image(){
    const history = useHistory()
    const {imageId} = useParams();
    const dispatch = useDispatch()
    const image = useSelector(state => state.images.all[imageId])
    const user = useSelector(state => state.session.user)
    const [showEdit, setShowEdit] = useState(false)
   


    useEffect(() => {
        if(!imageId){
            return;
        }
        (async () => {
            await dispatch(fetchImage(imageId));
          })();
    },[imageId])

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
            <h2>{image?.caption}</h2> 
            {
             user.id == image?.userId &&  <button onClick={displayEdit}>Edit</button>

            }
        </>
        ) 
    }
    
    const deleteImage = async(e) =>{
        e.preventDefault()
        await dispatch(destroyImage(imageId))
        history.push('/images/following')
    }


    return(
        <div className='image-page-container'>
            <img className='image-page-pic' src={image.imageUrl} alt='' />
            <div className='image-info-container'>
                <h1>{image?.poster?.username}</h1> 
                <div className='image-caption-container'> 
                <div>
                {
             user.id == image?.userId &&  <button onClick={e => deleteImage(e)}>Delete Image</button>

            }
                </div>
                    {captionContent}
                </div>  
            </div>
        </div>
    )
}

export default Image;
