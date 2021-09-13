import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImage } from '../store/image';
import { useDispatch } from 'react-redux';
function Image(){
    const dispatch = useDispatch()
    const [image, setImage] =useState({})
    const {imageId} = useParams();



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
        <h1>{image.caption}</h1>
    )
}

export default Image;