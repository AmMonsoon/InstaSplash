import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImage } from '../store/image';
import { useDispatch } from 'react-redux';

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
        <div>
            <h1>{image.caption}</h1>
            {console.log("zzzzzzzzzzzzzz",image.imageUrl)}

            <img src={image.imageUrl} alt='' />

        </div>
    )
}

export default Image;
