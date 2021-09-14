import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImage } from '../store/image';
import { useDispatch } from 'react-redux';
import './Image.css'
function Image(){
    const dispatch = useDispatch()
    const [image, setImage] =useState({})
    const {imageId, userId} = useParams();
   


    useEffect(() => {
        if(!imageId){
            return;
        }
        (async () => {
            const image = await dispatch(fetchImage(imageId));
       
            setImage(image);
          })();
    },[imageId])
    if (!image) {
        return null;
      }

    return(
        <div className='image-page-container'>
            <img className='image-page-pic' src={image.imageUrl} alt='' />
            <div className='image-info-container'>
                <h1>{image?.poster?.username}</h1> 
                <div className='image-caption-container'>      
                    <h2>{image?.caption}</h2> 
                </div>  
            </div>
        </div>
    )
}

export default Image;